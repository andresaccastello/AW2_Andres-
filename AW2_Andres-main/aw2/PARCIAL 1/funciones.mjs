import productos from './productos.mjs'


export function obtenerproductos(req, res) {
    const respuesta = {
        datos: productos.datos,
        url: 'http://localhost:3000/api/v1/productos',
        status: 200
    }

    res.json(respuesta)
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
            message: 'Producto no encontrado',
            status: 404
        })
    }
}
