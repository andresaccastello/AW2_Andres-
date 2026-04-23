// ExpressJS -> framework de JS para cerar servidores
import express from 'express'

const PUERTO = 3000

const app = express()

// --- MIDDLEWARES ---
// Necesarios para poder leer el body que envías desde el test.http
app.use(express.urlencoded({extended:true}))
app.use(express.json()) // <--- ¡ESTE ES EL QUE FALTABA!

// --- BASE DE DATOS (Simulada) ---
// Al poner el arreglo acá arriba, todas las rutas pueden acceder a él
const productos = [
    { id: 1, nombre : 'Camiseta', precio : 3000 },
    { id: 2, nombre : 'Pantalon', precio : 4000 }
]

// --- RUTAS ---
const obtenerRaiz = (req, res) => {
    res.end('Estas en la raiz')
}

app.get('/',obtenerRaiz)

app.get('/usuarios', (req, res)=>{
    const miObjeto = {
        materia: 'AW2'
    }
    // Simplificamos la respuesta para evitar el crasheo de "headers sent"
    res.status(200).json(miObjeto)
})

// Ruta para ver todos los productos
app.get('/productos', (req, res)=>{
    // Solo devolvemos el arreglo completo
    res.json(productos)
})

// Ruta para ver un producto específico por ID
app.get('/productos/:id', (req, res)=>{
    const id = parseInt(req.params.id)
    
    const productofiltrados = productos.filter((producto)=>{
        return (producto.id === id)
    })

    if(productofiltrados.length > 0 ){
        return res.json(productofiltrados)
    } else {
        return res.json({"mensaje":"Producto no encontrado"})
    }
})

// Envio datos al servidor para crear un producto
app.post('/productos', (req, res) => {
    const datosCliente = req.body;
    
    // Ahora sí funciona porque "productos" está arriba y es accesible
    productos.push(datosCliente) 
    
    res.status(201).json({
        mensaje: "Producto dado de alta",
        productoNuevo: datosCliente
    })
})

// --- INICIO DEL SERVIDOR ---
app.listen(PUERTO, ()=>{
    console.log(`http://localhost:${PUERTO}`)
})