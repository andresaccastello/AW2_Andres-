import productos from './productos.mjs'

export function obtenerproductos(req, res) {
    res.json(productos)
}

export function obtenerproductos_id(req, res) {
    const id = parseInt(req.params.id)

    const productosfiltrados = productos.filter((producto) => {
        return Number(producto.id) === id
    })

    if (productosfiltrados.length > 0) {
        const respuesta = {
            datos: productosfiltrados,
            url: 'http://localhost:3000/api/v1/productos/' + id,
            status : 200
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

    const productosfiltrados = productos.filter((producto) => {
        return Number(producto.id) !== id
    })

    if (productosfiltrados.length < productos.length) {
        productos.splice(0, productos.length, ...productosfiltrados)

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