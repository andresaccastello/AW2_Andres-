import productos from './productos.mjs'

export function obtenerproductos(req, res) {
    res.json(productos)
}

export function obtenerproductos_id(req, res) {
    const id = parseInt(req.params.id)

    const productosfiltrados = productos.datos.filter((producto) => {
        return Number(producto.id) === id
    })

    if (productosfiltrados.length > 0) {
        const respuesta = {
            datos: productosfiltrados,
            url: 'http://localhost:3000/api/v1/productos/' + id,
            status: 200
        }

        res.json(respuesta)
    } else {
        res.status(404).json({
            message: 'Producto no encontrado'
        })
    }
}

export function eliminarproductos_id(req, res) {
    const id = parseInt(req.params.id)

    const productosfiltrados = productos.datos.filter((producto) => {
        return Number(producto.id) !== id
    })

    if (productosfiltrados.length < productos.datos.length) {
        productos.datos.splice(0, productos.datos.length, ...productosfiltrados)

        const respuesta = {
            datos: productosfiltrados,
            url: 'http://localhost:3000/api/v1/productos/' + id,
            status: 200
        }

        res.json(respuesta)
    } else {
        res.status(404).json({
            message: 'Producto no encontrado'
        })
    }
}

export function altaProducto(req, res) {
    const producto = req.body

    const ultimo = productos.ulitmo_id + 1

    const productoFinal = {
        id: ultimo,
        ...producto
    }

    productos.ulitmo_id = ultimo
    productos.datos.push(productoFinal)

    res.status(201).json({
        mensaje: 'Se dio de alta el producto',
        datos: productoFinal
    })
}

export function modificarproducto(req,res){
    const id_producto = Number(req.params.id)

    const produc = req.body

    productos.datos.map((producto)=>{
       if(Number(producto.id) === id_producto){
       const indecie = productos.datos.indexOf(producto)
       console.log(indecie)
productos.datos[indecie] = {
    id: id_producto,
    ...produc
}
       res.json({mensaje: 'se modifico' + id_producto})}

    })

    


}