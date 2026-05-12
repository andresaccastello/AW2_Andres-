import express from 'express'

import { altaProducto, obtenerproductos,obtenerproductos_id, eliminarproductos_id, modificarproducto} from './funciones.mjs'

const app = express()

const PUERTO = 3000

app.use(express.json())

app.get('/api/v1/productos', obtenerproductos)
app.get('/api/v1/productos/:id', obtenerproductos_id)
app.post('/api/v1/productos', altaProducto)
app.delete('/api/v1/productos/:id', eliminarproductos_id)
app.put('/api/v1/productos/:id', modificarproducto )

app.listen(PUERTO, () => {
    console.log(`Servidor funcionando en http://localhost:${PUERTO}`)
})

