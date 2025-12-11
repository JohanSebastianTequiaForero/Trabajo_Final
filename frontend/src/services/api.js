const API_URL = "https://trabajofinal-production-4e79.up.railway.app";

export async function getTodos() {
    const res = await fetch(`${API_URL}/todos`);
    return res.json();
}
