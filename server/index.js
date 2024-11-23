const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

// Carga de Variables de Entorno
dotenv.config()

const app = express()
app.use(express.json())

// Conexion con DB

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Conectado a MongoDB'))
    .catch(err => console.log('Error al conectar a MongoDB', err))

const port = process.env.PORT

app.listen(port, () => console.log(`Servidor corriendo en http://localhost:${port}`))
