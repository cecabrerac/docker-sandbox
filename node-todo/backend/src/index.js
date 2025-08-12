require("dotenv").config();
const express = require("express");
const { Pool } = require("pg");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const pool = new Pool({
  host: "db",
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: 5432,
});

// 🛠️ Crear tabla si no existe
const initDB = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS todos (
        id SERIAL PRIMARY KEY,
        description TEXT NOT NULL,
        completed BOOLEAN DEFAULT false
      );
    `);
    console.log('✅ Tabla "todos" verificada o creada');
  } catch (err) {
    console.error("❌ Error al crear la tabla:", err);
  }
};

// GET /todos
app.get("/todos", async (req, res) => {
  const result = await pool.query("SELECT * FROM todos ORDER BY id ASC");
  res.json(result.rows);
});

// GET todo by id
app.get("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query("SELECT * FROM todos WHERE id = $1", [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Tarea no encontrada" });
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error("❌ Error en GET /todos/:id:", err);
    res.status(500).json({ error: "Error al obtener la tarea" });
  }
});

// POST /todos
app.post("/todos", async (req, res) => {
  const { description, completed } = req.body;
  const result = await pool.query(
    "INSERT INTO todos (description, completed) VALUES ($1, $2) RETURNING *",
    [description, completed]
  );
  res.status(201).json(result.rows[0]);
});

// PUT /todos/:id
app.put("/todos/:id", async (req, res) => {
  const { id } = req.params;
  const { description, completed } = req.body;
  const result = await pool.query(
    "UPDATE todos SET description = $1, completed = $2 WHERE id = $3 RETURNING *",
    [description, completed, id]
  );
  res.json(result.rows[0]);
});

// DELETE /todos/:id
app.delete("/todos/:id", async (req, res) => {
  const { id } = req.params;
  await pool.query("DELETE FROM todos WHERE id = $1", [id]);
  res.status(204).send();
});

app.listen(3000, "0.0.0.0", async () => {
  console.log("🚀 Backend corriendo en puerto 3000");
  await initDB();
});
