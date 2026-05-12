import express from 'express'

const PUERTO = 3000

const app = express()

const verificarCodigomiddleware = async (req, res, next) => {
    const codigoParametro = req.params.codigo

    const respuesta = await fetch('http://localhost:4321/usuario')
    const usuario = await respuesta.json()

    if (codigoParametro === String(usuario.codigo)) {
        next()
    } else {
        res.status(400).json({
            mensaje: 'El código es incorrecto'
        })
    }
}

app.get('/:codigo', verificarCodigomiddleware, (req, res) => {
    res.status(200).json({
        mensaje: 'El código es correcto'
    })
})


app.listen(PUERTO, () => {
    console.log(`Servidor del proyecto funcionando en http://localhost:${PUERTO}`)
})