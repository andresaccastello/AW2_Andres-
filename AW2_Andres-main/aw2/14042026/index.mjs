//importamos el modulo http
import http from 'node:http'
import fsp from 'node:fs/promises'
// Creamos una instancia de servidor
const app = http.createServer(async(peticion, respuesta) => {
  //console.log(peticion) // <-- viene del cliente

  if (peticion.method === 'GET') {

    if (peticion.url === '/') {
      // Antes del end todo. despues nada
      respuesta.statusCode = 200
      return respuesta.end(`
        ruta raiz /
      `) // <---
    }

    if (peticion.url === '/usuarios') {
      // Antes del end todo. despues nada
      respuesta.statusCode = 200
      return respuesta.end(`
        ruta usuarios /usuarios
      `) // <---
    }

  }

  if (peticion.method === 'POST') {
    if (peticion.url === '/') {
        const ruta = './contenido.txt'
       await fsp.writeFile('Contenido fake')
      return respuesta.end('Recurso creado')
    }
  }

  //--------------------------------------
  // Fallback
  respuesta.statusCode = 404
  return respuesta.end('No se encontro la ruta')
})
//abrimos puerto 
app.listen(3000,()=>{

console.log('Escuchando puerto http://localhost:3000 ')
})