# Create image:
#   docker build -t "jeff-manzione-website" .

ARG VARIANT="3.9"
FROM mcr.microsoft.com/vscode/devcontainers/python:0-${VARIANT}

RUN \
  pip3 install flask psycopg2-binary waitress requests

COPY \
  server /website/server

COPY \
  client-compiled /website/client-compiled

WORKDIR /website

CMD python3 server/app.py --host 0.0.0.0 --port $PORT