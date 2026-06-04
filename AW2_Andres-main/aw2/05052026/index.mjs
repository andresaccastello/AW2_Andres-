import express from 'express'
/*import productos from './productos.mjs'*/
import {obtenerproductos} from './funciones.mjs'
import {obtenerproductos_id, eliminarproductos_id} from './funciones.mjs'



const app = express()

const PUERTO =3000



app.get('/api/v1/productos', obtenerproductos)

/*app.get('/api/v1/productos/:id', obtenerproductos_id)*/
app.delete('/api/v1/productos/:id', eliminarproductos_id)

app.listen(PUERTO)