import express from "express";
import cors from "cors";
import pool from "./db.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Backend activo!");
});

app.get("/todos", async (req, res) => {
    const [rows] = await pool.query("SELECT * FROM todos ORDER BY id DESC");
    res.json(rows);
});

app.post("/todos", async (req, res) => {
    const { title, description } = req.body;
    const [result] = await pool.query(
        "INSERT INTO todos (title, description) VALUES (?, ?)",
        [title, description]
    );
    res.json({ id: result.insertId, title, description });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log("Backend en puerto", PORT));
