del client-compiled
cd client
ng build --output-path ../client-compiled
cd ..
docker build -t jeffrey-manzione/website .
