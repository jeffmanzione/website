rm -R -f client-compiled
cd client
ng build --output-path ../client-compiled
cd ..
docker build -t jeffrey-manzione/website .
heroku login
heroku container:login
heroku container:push --app jeff-manzione-website web
heroku container:release --app jeff-manzione-website web
