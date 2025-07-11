# Build and Run the Docker Image

From inside the my-static-app (frontend-static-app-nginx || root folder) folder:

## ${\color{orange}Build \space the \space image}$

docker build -t my-static-app-nginx .

\*\* Don't forget the dot at the end of the command

## ${\color{orange}Run \space the \space container}$

docker run --name=static-app-nginx -d -p 8080:80 my-static-app-nginx

Now, open your browser and go to:

http://localhost:8080
