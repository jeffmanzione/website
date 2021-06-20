from flask import Flask
from db.database import Database
from api.comments import CommentsApi
import os

app = Flask(__name__, static_folder=os.path.abspath(
    '/website/client-compiled/'))

DATABASE_URL = os.environ['DATABASE_URL']
database = Database(DATABASE_URL)

CommentsApi(app, database)


@app.route('/')
def index():
    return app.send_static_file('index.html')


@app.route('/<path:name>')
def angular_app(name):
    return app.send_static_file(name)
