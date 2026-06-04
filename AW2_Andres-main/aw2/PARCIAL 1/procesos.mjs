import productos from './productos.mjs'


export function calcularvalorinventario(req, res) {
    let stocktotal = 0
    let valortotal = 0

    productos.datos.forEach((producto) => {
        stocktotal = stocktotal + producto.stock
        valortotal = valortotal + (producto.precio * producto.stock)
    })

    const respuesta = {
        datos: {
            cantidad_productos: productos.datos.length,
            stock_total: stocktotal,
            valor_total_inventario: valortotal
        },
        url: 'http://localhost:3000/calcular-valor-inventario',
        status: 200
    }

    res.json(respuesta)
}
