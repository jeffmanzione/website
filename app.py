from flask import Flask, send_from_directory

app = Flask(__name__, static_url_path='')


@app.route('/')
def index():
    return app.send_static_file('client/compiled/index.html')


@app.route('/<path:path>')
def angular_app(path):
    return send_from_directory('client/compiled', path)
