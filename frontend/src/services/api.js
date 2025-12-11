const API_URL = "https://tu-backend.up.railway.app";

export async function getTodos() {
  const res = await fetch(`${API_URL}/todos`);
  return res.json();
}
