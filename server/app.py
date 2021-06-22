import argparse
from flask import Flask, send_from_directory
from db.database import Database
from api.comments import CommentsApi
import os

parser = argparse.ArgumentParser()
parser.add_argument('--host', help='The host address',
                    type=str, default='0.0.0.0')
parser.add_argument('--port', help='The port to run on',
                    type=int, default=5000)
parser.add_argument(
    '--dev', help='Enable the server in dev mode.', type=bool, default=False)
parser.add_argument('--database', help='Database url.', type=str, default=None)
parser.add_argument('--static-folder', help='Path to the static content,',
                    type=str, default=os.path.abspath('/website/client-compiled/'))
args = parser.parse_args()

app = Flask(__name__, static_folder=args.static_folder)

app.config.from_object(
    'configs.DevConfig' if args.dev else 'configs.ProdConfig')

DATABASE_URL = args.database or os.environ['DATABASE_URL']
database = Database(DATABASE_URL)

CommentsApi(app, database)


@app.route('/')
def index():
    return send_from_directory(os.path.join(os.getcwd(), args.static_folder), 'index.html')


@app.route('/<path:name>')
def angular_app(name):
    return send_from_directory(os.path.join(os.getcwd(), args.static_folder), name.lstrip('/'))


if __name__ == '__main__':
    if args.dev:
        app.run(host=args.host, port=args.port)
    else:
        from waitress import serve
        serve(app, host=args.host, port=args.port)
