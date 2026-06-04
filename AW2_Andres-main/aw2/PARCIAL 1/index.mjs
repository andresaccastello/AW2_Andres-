import express from 'express'
import { obtenerproductos, obtenerproductos_id } from './funciones.mjs'
import { calcularvalorinventario } from './procesos.mjs'
import { registrarsolicitud, rutanoencontrada } from './middlewares.mjs'

const app = express()
const PUERTO = 3000


app.use(registrarsolicitud)


app.get('/api/v1/productos', obtenerproductos)


app.get('/api/v1/productos/:id', obtenerproductos_id)


app.get('/calcular-valor-inventario', calcularvalorinventario)


app.use(rutanoencontrada)

app.listen(PUERTO, () => {
    console.log('Servidor funcionando en http://localhost:' + PUERTO)
})
