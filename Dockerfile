#create image
#  docker build - < Dockerfile -t "jeff-manzione-website"   
#create and run container
#  docker run -p 5000:5000  -v C:/User/jeffr/git:/usr/src --env PORT=5000 --env FLASK_ENVIRONMENT=development jeff-manzione-website

ARG VARIANT="3.9"
FROM mcr.microsoft.com/vscode/devcontainers/python:0-${VARIANT}
WORKDIR /usr/src

EXPOSE $PORT

ENV FLASK_ENV=$FLASK_ENVIRONMENT
ENV FLASK_APP=website/app 

RUN \
  pip install scipy \
  pip install numpy \
  pip install flask

RUN \
  apt-get -y install git \
  git clone https://github.com/jeffreymanzione/website.git

CMD flask run --host 0.0.0.0 --port $PORT