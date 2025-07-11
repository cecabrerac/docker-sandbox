# Build and Run the Docker Image

From inside the my-static-app (frontend-nodejs-nginx || root folder) folder:

## Build the image

docker build -t my-static-app-nginx .
\*\* Don't forget the dot at the end of the command

## Run the container

docker run --name=static-app-nginx -d -p 8080:80 my-static-app-ng
inx

Now, open your browser and go to:

http://localhost:8080
