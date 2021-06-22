#create image
#  docker build - < Dockerfile -t "jeff-manzione-website"   
#create and run container
#  docker run -p 5000:5000 -v C:/User/jeffr/git:/usr/src --env PORT=5000 --env FLASK_ENVIRONMENT=development jeff-manzione-website

ARG VARIANT="3.9"
FROM mcr.microsoft.com/vscode/devcontainers/python:0-${VARIANT}

RUN \
  pip3 install flask psycopg2-binary waitress

COPY \
  server /website/server

COPY \
  client-compiled /website/client-compiled

WORKDIR /website

CMD python3 server/app.py --host 0.0.0.0 --port $PORT