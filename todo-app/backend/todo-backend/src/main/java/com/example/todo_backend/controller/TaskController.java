package com.example.todo_backend.controller;

import com.example.todo_backend.model.Task;
import com.example.todo_backend.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tasks")
@CrossOrigin(origins = "*")
public class TaskController {

    @Autowired
    private TaskRepository repo;

    @GetMapping
    public List<Task> getAllTasks() {
        return repo.findAll();
    }

    @PostMapping
    public Task createTask(@RequestBody Task task) {
        return repo.save(task);
    }

    @PutMapping("/{id}")
    public Task updateTask(@PathVariable Long id, @RequestBody Task updated) {
        return repo.findById(id).map(task -> {
            task.setDescription(updated.getDescription());
            task.setCompleted(updated.isCompleted());
            return repo.save(task);
        }).orElseThrow(() -> new RuntimeException("Task not found"));
    }

    @DeleteMapping("/{id}")
    public void deleteTask(@PathVariable Long id) {
        repo.deleteById(id);
    }
}