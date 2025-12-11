// backend/server.js
import express from "express";
import cors from "cors";
import todosRouter from "./todos.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors()); // permite llamadas desde Vercel
app.use(express.json()); // parsea JSON

app.use("/todos", todosRouter);

app.get("/", (req, res) => res.send("Backend activo!"));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Servidor escuchando en ${PORT}`));
