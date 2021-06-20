#create image
#  docker build - < Dockerfile -t "jeff-manzione-website"   
#create and run container
#  docker run -p 5000:5000 -v C:/User/jeffr/git:/usr/src --env PORT=5000 --env FLASK_ENVIRONMENT=development jeff-manzione-website

ARG VARIANT="3.9"
FROM mcr.microsoft.com/vscode/devcontainers/python:0-${VARIANT}

EXPOSE $PORT

RUN \
  pip3 install flask

RUN \
  pip3 install psycopg2-binary

COPY \
  server /website/server

COPY \
  client-compiled /website/client-compiled

WORKDIR /website

ENV FLASK_APP=server/app
CMD flask run --host 0.0.0.0 --port $PORT