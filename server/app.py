from flask import Flask
import os

app = Flask(__name__, static_folder=os.path.abspath(
    '/website/client-compiled/'))


@app.route('/')
def index():
    return app.send_static_file('index.html')


@app.route('/<path:name>')
def angular_app(name):
    return app.send_static_file(name)
