// console.log('todo ok')
// fs gestion de archivos en node
import fs from 'node:fs/promises';
// Gestin de nombres de rutas en los distintos os
import path from 'node:path'

try{
    const ruta = path.join('./texto.txt')
    // Escribimos archivo
    await fsp.writeFile(ruta, 'Nuevo contenido')
}catch(e){
    console.log(e)
}