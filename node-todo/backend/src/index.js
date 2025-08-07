require("dotenv").config();
const express = require("express");
const { Pool } = require("pg");

const app = express();
app.use(express.json());

const pool = new Pool({
  host: "db",
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: 5432,
});

app.get("/todos", async (req, res) => {
  const result = await pool.query("SELECT * FROM todos");
  res.json(result.rows);
});

app.listen(3000, () => {
  console.log("Backend running on port 3000");
});
