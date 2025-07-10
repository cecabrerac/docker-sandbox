const form = document.getElementById("task-form");
const list = document.getElementById("task-list");
const API = "http://localhost:8080/tasks";

function fetchTasks() {
  fetch(API)
    .then((res) => res.json())
    .then((tasks) => {
      list.innerHTML = "";
      tasks.forEach((task) => {
        const item = document.createElement("li");
        item.textContent = `${task.description} [${
          task.completed ? "✓" : "✗"
        }]`;
        list.appendChild(item);
      });
    });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const desc = document.getElementById("description").value;

  fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ description: desc, completed: false }),
  }).then(() => {
    document.getElementById("description").value = "";
    fetchTasks();
  });
});

fetchTasks();
