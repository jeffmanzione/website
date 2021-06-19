#create image
#  docker build - < Dockerfile -t "jeff-manzione-website"   
#create and run container
#  docker run -p 5000:5000 -v C:/User/jeffr/git:/usr/src --env PORT=5000 --env FLASK_ENVIRONMENT=development jeff-manzione-website

ARG VARIANT="3.9"

FROM mcr.microsoft.com/vscode/devcontainers/python:0-${VARIANT}
WORKDIR /usr/src

ENV FLASK_APP=website/app 

EXPOSE $PORT

RUN \
  apt-get -y install git

RUN \
  pip install flask

RUN \
  git clone https://github.com/jeffreymanzione/website.git

FROM node
WORKDIR /usr/src

RUN \
  npm install -g @angular/cli

RUN \
  cd website/client && ng build

CMD flask run --host 0.0.0.0 --port $PORT