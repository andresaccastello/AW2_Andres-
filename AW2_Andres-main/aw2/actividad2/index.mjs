

import fs from 'node:fs/promises';
// Gestión de nombres de rutas en distintos OS
import path from 'node:path';

import { obtenerUsuarios } from './LecturaApi.mjs';

try {
    const usuarios = await obtenerUsuarios();

    const filtro = usuarios.map(usuario => ({
        id: usuario.id,
        email: usuario.email,
        name: usuario.name
    }));

    const ruta = path.join(process.cwd(), 'usuarios.json');

    await fs.writeFile(ruta, JSON.stringify(filtro, null, 2), 'utf-8');

    const contenido = await fs.readFile(ruta, 'utf-8');
    const datosLeidos = JSON.parse(contenido);

    console.log(datosLeidos);
} catch (e) {
    console.log(e);
}