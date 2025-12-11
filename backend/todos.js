// backend/todos.js
import express from "express";
import pool from "./db.js";

const router = express.Router();

// GET /todos
router.get("/", async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM todos ORDER BY created_at DESC");
        return res.status(200).json(rows);
    } catch (err) {
        console.error("GET /todos error", err);
        return res.status(500).json({ error: "Error obteniendo tareas" });
    }
});

// POST /todos
router.post("/", async (req, res) => {
    try {
        const { title, description, status } = req.body;
        if (!title || title.trim() === "") {
            return res.status(400).json({ error: "title required" });
        }
        const [result] = await pool.query(
            "INSERT INTO todos (title, description, status) VALUES (?, ?, ?)",
            [title, description || null, status || "pending"]
        );
        const [rows] = await pool.query("SELECT * FROM todos WHERE id = ?", [result.insertId]);
        return res.status(201).json(rows[0]);
    } catch (err) {
        console.error("POST /todos error", err);
        return res.status(500).json({ error: "Error creando tarea" });
    }
});

// PUT /todos/:id
router.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, status } = req.body;

        const [exists] = await pool.query("SELECT id FROM todos WHERE id = ?", [id]);
        if (exists.length === 0) return res.status(404).json({ error: "Tarea no encontrada" });

        await pool.query(
            "UPDATE todos SET title = COALESCE(?, title), description = COALESCE(?, description), status = COALESCE(?, status) WHERE id = ?",
            [title, description, status, id]
        );

        const [rows] = await pool.query("SELECT * FROM todos WHERE id = ?", [id]);
        return res.status(200).json(rows[0]);
    } catch (err) {
        console.error("PUT /todos/:id error", err);
        return res.status(500).json({ error: "Error actualizando tarea" });
    }
});

// DELETE /todos/:id
router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const [exists] = await pool.query("SELECT id FROM todos WHERE id = ?", [id]);
        if (exists.length === 0) return res.status(404).json({ error: "Tarea no encontrada" });

        await pool.query("DELETE FROM todos WHERE id = ?", [id]);
        return res.status(200).json({ message: "Tarea eliminada" });
    } catch (err) {
        console.error("DELETE /todos/:id error", err);
        return res.status(500).json({ error: "Error eliminando tarea" });
    }
});

export default router;
