// frontend/src/services/api.js
const API_URL = import.meta.env.VITE_API_URL || "https://trabajofinal-production-4e79.up.railway.app";

async function handleResponse(res) {
    const text = await res.text();
    let data;
    try { data = text ? JSON.parse(text) : null; } catch { data = text; }
    if (!res.ok) {
        const err = (data && data.error) || data || res.statusText;
        throw new Error(err);
    }
    return data;
}

export async function getTodos() {
    const res = await fetch(`${API_URL}/todos`);
    return handleResponse(res);
}

export async function createTodo(payload) {
    const res = await fetch(`${API_URL}/todos`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    });
    return handleResponse(res);
}

export async function updateTodo(id, payload) {
    const res = await fetch(`${API_URL}/todos/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    });
    return handleResponse(res);
}

export async function deleteTodo(id) {
    const res = await fetch(`${API_URL}/todos/${id}`, {
        method: "DELETE"
    });
    return handleResponse(res);
}
