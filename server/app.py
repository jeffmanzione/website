import argparse
from flask import Flask, send_from_directory, request, Response
import os
import requests

from db.database import Database
from api.comments import CommentsApi
from api.api_registry import ApiRegistry

parser = argparse.ArgumentParser()
parser.add_argument('--host', help='The host address',
                    type=str, default='0.0.0.0')
parser.add_argument('--port', help='The port to run on',
                    type=int, default=5000)
parser.add_argument(
    '--dev', help='Enable the server in dev mode.', type=bool, default=False)
parser.add_argument(
    '--dev-angular-app', help='Url to dev angular app.', type=str, default='http://localhost:4200/')
parser.add_argument('--database', help='Database url.', type=str, default=None)
parser.add_argument('--static-folder', help='Path to the static content,',
                    type=str, default=os.path.abspath('/website/client-compiled/'))
args = parser.parse_args()

app = Flask(__name__, static_folder=args.static_folder)

app.config.from_object(
    'configs.DevConfig' if args.dev else 'configs.ProdConfig')

DATABASE_URL = args.database or os.environ['DATABASE_URL']
database = Database(DATABASE_URL)

api_registry = ApiRegistry(app)
api_registry.register(CommentsApi(app, database))


@app.route('/')
@app.route('/home')
@app.route('/apis')
def index():
    if args.dev:
        return _proxy()
    else:
        return angular_app('index.html')


@app.route('/<path:name>')
def angular_app(name):
    if args.dev:
        return _proxy()
    else:
        return send_from_directory(os.path.join(os.getcwd(), args.static_folder), name.lstrip('/'))


def _proxy():
    resp = requests.request(
        method=request.method,
        url=request.url.replace(
            request.host_url, args.dev_angular_app),
        headers={key: value for (key, value)
                 in request.headers if key != 'Host'},
        data=request.get_data(),
        cookies=request.cookies,
        allow_redirects=False)
    excluded_headers = ['content-encoding',
                        'content-length', 'transfer-encoding', 'connection']
    headers = [(name, value) for (name, value) in resp.raw.headers.items()
               if name.lower() not in excluded_headers]
    response = Response(resp.content, resp.status_code, headers)
    return response


if __name__ == '__main__':
    if args.dev:
        app.run(host=args.host, port=args.port)
    else:
        from waitress import serve
        serve(app, host=args.host, port=args.port)
