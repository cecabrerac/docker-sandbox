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
        item.textContent = task.description;
        item.classList.add("task-item");
        if (task.completed) {
          item.classList.add("completed");
        }

        // Toggle completion on click
        item.addEventListener("click", () => {
          fetch(`${API}/${task.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...task, completed: !task.completed }),
          }).then(fetchTasks);
        });

        // Delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.addEventListener("click", (e) => {
          e.stopPropagation(); // Prevent toggling when deleting
          fetch(`${API}/${task.id}`, {
            method: "DELETE",
          }).then(fetchTasks);
        });

        item.appendChild(deleteBtn);
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
