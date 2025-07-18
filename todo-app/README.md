# 📝 To-Do App (Dockerized)

This is a simple Dockerized To-Do application. Clone the repo, build the Docker image, and you’ll have a self-contained app ready to go!

## 🚀 Getting Started

### Prerequisites

- [Docker](https://www.docker.com/get-started) installed

### 🛠️ Run the App with Docker Compose

Make sure you have Docker and Docker Compose installed.

1. ### **Clone the repo**

   ```bash
   git clone https://github.com/ccabrerac/todo-app.git
   cd todo-app

   ```

2. ### Start the app using Docker Compose

   docker-compose up --build

3. ### - Access the app Open your browser and go to: http://localhost

## 🧩 Services Overview

### 🔙 Backend (`./backend`)

Handles API logic, task management, and database interactions. Built with Java and Spring Boot.

### 🎨 Frontend (`./frontend`)

User interface built with javaScript, html and css. Connects to backend APIs to display and manage tasks in real time.

### 🗄️ Database (`db`)

Uses PostgreSQL. The database container is defined in `docker-compose.yml` and automatically initialized on startup.
