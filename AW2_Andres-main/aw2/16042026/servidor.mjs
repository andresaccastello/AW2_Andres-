
import http from "http";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
// constantes
const PUERTO = 3000;
const API_URL = "https://api.escuelajs.co/api/v1/users";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ARCHIVO_JSON = path.join(__dirname, "usuarios.json");

// función para obtener datos de la API
const obtenerUsuarios = async () => {
  const res = await fetch(API_URL);
  const data = await res.json();
  return data;
};

// función para guardar archivo
const guardarUsuarios = async (data) => {
  await fs.writeFile(ARCHIVO_JSON, JSON.stringify(data, null, 2));
};

// función para leer archivo
const leerUsuarios = async () => {
  const data = await fs.readFile(ARCHIVO_JSON, "utf-8");
  return JSON.parse(data);
};

// crear servidor
const servidor = http.createServer(async (req, res) => {
  try {
    // ruta principal
    if (req.url === "/usuarios" && req.method === "GET") {
      const usuarios = await obtenerUsuarios();
      await guardarUsuarios(usuarios);

      const datos = await leerUsuarios();

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(datos));
    }

    
    else if (req.url === "/usuarios/filtrados" && req.method === "GET") {
      const usuarios = await leerUsuarios();
      const filtrados = usuarios.filter(u => u.id < 10);

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(filtrados));
    }

    
    else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Recurso no encontrado");
    }

  } catch (error) {
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("Error interno del servidor");
    console.error(error);
  }
});

// levantar servidor
servidor.listen(PUERTO, () => {
  console.log(`Servidor corriendo en http://localhost:${PUERTO}`);
});