/*
Capa encargada de los datos
Por ejemplo, consultas a una base de datos local o externa
*/

import pg from './conexion_bd'

// manera nombrada
export function obtenerTodos() {

pg.query('SELECT * FROM productos;')
console.log(obtenerTodos)
    return productos
}

export function obtenerUno(id) {

    const id_producto = Number(id)

    const productosFiltrados = productos.datos.filter((producto) => {
        return Number(producto.id) === id_producto
    })

    return productosFiltrados
}

export function eliminarUno(id) {

    const id_producto = Number(id);

    const productosFiltrados = productos.datos.filter((producto) => {
        return Number(producto.id) !== id_producto;
    })

    return productosFiltrados;
}