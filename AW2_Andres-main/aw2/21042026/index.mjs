import express from "express"

const PUERTO = 3000

const app = express()

app.get('/', (req, res)=>{

    res.status(200)
    res.set('content-type',"text/html")
    res.send('Hola')

})

app.post('/', (req, res)=>{


    res.status(201)
    res.send('Hola raiz')
})

app.listen(PUERTO, ()=>{

    console.log(`Servidor corriendo en http://localhost:${PUERTO}`);

})


