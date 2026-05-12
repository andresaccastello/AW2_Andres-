

export function registrarsolicitud(req, res, next) {
    console.log('Metodo: ' + req.method)
    console.log('Ruta: ' + req.url)
    next()
}


export function rutanoencontrada(req, res) {
    res.status(404).json({
        message: 'Ruta no encontrada',
        url: req.url,
        status: 404
    })
}
