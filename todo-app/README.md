# 📝 To-Do App (Dockerized)

This is a simple Dockerized To-Do application. Clone the repo, build the Docker image, and you’ll have a self-contained app ready to go!

## 🚀 Getting Started

### Prerequisites

- [Docker](https://www.docker.com/get-started) installed

### 🛠️ Run the App

1. **Clone the repo**
   ```bash
   git clone https://github.com/yourusername/todo-app.git
   cd todo-app
   ```
2. **Build the Docker image**
   ```bash
   docker build -t todo-app .
   ```
3. ** Run the container**
   ```bash
   docker run -p 3000:3000 todo-app
   ```
4. **Access the app**
   - Open your browser and go to `http://localhost:3000`
   - You should see the To-Do app running

## 📝 Notes

- The app is built using [Spring Boot](https://spring.io/projects/spring-boot) and vanilla javaScript.
- The app uses [PostgreSQL](https://www.postgresql.org/) as the database.
- The app uses [Docker](https://www.docker.com/) to run the app in a container.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
