// console.log('todo ok')
// fs gestion de archivos en node
import fs from 'node:fs/promises';
// Gestin de nombres de rutas en los distintos os
import path from 'node:path'

try{
   const respuesta = await fetch('https://69cbcb860b417a19e07b42fe.mockapi.io/productos')
   const productos = await respuesta.json()
   console.log(productos)
}catch(e){
    console.log(e)
}