
📌 Todo App MySQL — Proyecto Final Integrador
Aplicación fullstack para gestión de tareas (Todo App), desarrollada como proyecto final integrador.
Incluye frontend en React + Vite, backend en Node.js + Express y base de datos MySQL desplegada en la nube.

🚀 Vista Previa
Interfaz limpia y moderna

Diseño responsivo

CRUD completo de tareas

Backend con API REST

Persistencia en MySQL

Deploy en Vercel + Render

🛠️ 1. Stack Tecnológico
Frontend
React 18

Vite

Axios

CSS3 (estilos personalizados)

Backend
Node.js

Express

MySQL (mysql2/promise)

Dotenv

CORS

DevOps / Deploy
Vercel (Frontend)

Render (Backend)

GitHub (Código fuente)

🌐 2. URLs del Proyecto
Repositorio
https://github.com/JohanSebastianTequiaForero/Trabajo_Final

Frontend (Producción – Vercel)
https://todo-app-mysql-git-main-johansebastiantequiaforeros-projects.vercel.app

Backend (Producción – Render)
https://trabajo-final-em1b.onrender.com

Base URL API
Desarrollo:
http://localhost:3000

Producción:
https://trabajo-final-em1b.onrender.com

📦 3. Requisitos Previos
Node.js v18+

npm v9+

Git

MySQL Local (opcional)

🔧 4. Instalación y Ejecución en Local
4.1 Clonar repositorio
git clone https://github.com/JohanSebastianTequiaForero/Trabajo_Final.git
cd Trabajo_Final
4.2 Backend — Node.js + Express
Entrar a la carpeta:

cd backend
npm install
Crear archivo .env:

DB_HOST=trolley.proxy.rlwy.net
DB_PORT=18625
DB_USER=root
DB_PASS=tglcKRfEzZDaEwKMoesbEfUbccfCdoyP
DB_NAME=railway
Ejecutar:

node index.js
Backend corriendo en:
https://trabajo-final-em1b.onrender.com

4.3 Frontend — React + Vite
Entrar a la carpeta:

cd frontend
npm install
Crear archivo .env:

VITE_API_URL=https://trabajo-final-em1b.onrender.com
Ejecutar:

npm run dev
Frontend en:
https://todo-app-mysql-git-main-johansebastiantequiaforeros-projects.vercel.app?_vercel_share=gWGgT0jvuLbFKhmZ79cpM03tArtcw2Ed

🗂️ 5. Estructura del Proyecto
Trabajo_Final/
├── backend/                     # Node.js + Express
│   ├── index.js
│   ├── conexion.js
│   ├── package.json
│   └── .env.example
│
├── frontend/                    # React + Vite
│   ├── src/
│   │   ├── components/
│   │   │   ├── ToDoList.jsx
│   │   │   ├── TodoForm.jsx
│   │   │   └── TodoItem.jsx
│   │   ├── api/
│   │   │   └── lista.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── .env.example
│
└── README.md
📚 6. Documentación de la API (API REST)
Base URL desarrollo:
https://railway.com/invite/7sGxinCHPQE

Base URL producción:
https://trabajo-final-em1b.onrender.com

6.1 GET /todos
Obtiene todas las tareas.

Request

curl https://trabajofinal-production-4e79.up.railway.app/todos
Response 200 OK

[
  {
    "id": 1,
    "titulo": "Comprar pan",
    "descripcion": "Pan integral",
    "estado": "pendiente",
    "fecha_creacion": "2025-02-01T10:30:00.000Z"
  }
]
6.2 POST /todos
Crea una nueva tarea.

Request

curl -X POST https://trabajofinal-production-4e79.up.railway.app/todos \
-H "Content-Type: application/json" \
-d '{
  "titulo": "Hacer ejercicio",
  "descripcion": "30 minutos"
}'
Body esperado

{
  "titulo": "texto",
  "descripcion": "texto"
}
Response 201 Created

{
  "id": 2,
  "titulo": "Hacer ejercicio",
  "descripcion": "30 minutos",
  "estado": "pendiente",
  "fecha_creacion": "2025-02-01T12:00:00.000Z"
}
6.3 PUT /tareas/:id
Actualiza una tarea existente.

Request

curl -X PUT https://trabajofinal-production-4e79.up.railway.app/todos/1 \
-H "Content-Type: application/json" \
-d '{
  "titulo": "Comprar pan integral",
  "descripcion": "Pan sin azúcar",
  "estado": "completada"
}'
Response 200 OK

{
  "id": 1,
  "titulo": "Comprar pan integral",
  "descripcion": "Pan sin azúcar",
  "estado": "completada"
}
6.4 DELETE /tareas/:id
Request

curl -X DELETE https://trabajofinal-production-4e79.up.railway.app/todos/1
Response 200 OK

{ "mensaje": "Tarea eliminada correctamente" }
📘 7. Códigos de Estado HTTP
Código	Descripción
200	OK
201	Created
400	Bad Request
404	Not Found
500	Server Error
🛠️ 8. Troubleshooting
“CORS Error”

Verificar que cors() esté habilitado.

Revisar VITE_API_URL en frontend.

“Error de conexión a MySQL”

Revisar credenciales del .env.

Asegurar que MySQL esté corriendo.

“Cannot GET /”

La API solo responde a rutas /tareas.

👥 9. Autores
Proyecto realizado por:

Johan Sebastián Tequia Forero

Ana María Guzmán

Alixon Guzmán

📄 10. Licencia
Proyecto académico. Uso educativo.

