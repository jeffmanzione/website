#create image
#  docker build - < Dockerfile -t "jeff-manzione-website"   
#create and run container
#  docker run -p 5000:5000 -v C:/User/jeffr/git:/usr/src --env PORT=5000 --env FLASK_ENVIRONMENT=development jeff-manzione-website

ARG VARIANT="3.9"
FROM mcr.microsoft.com/vscode/devcontainers/python:0-${VARIANT}

ENV FLASK_APP=app 

EXPOSE $PORT

RUN \
  apt update && \
  apt-get -y install git

RUN \
  pip3 install flask

RUN \
  git clone https://github.com/jeffreymanzione/website.git

WORKDIR /usr/src/website
CMD flask run --host 0.0.0.0 --port $PORT