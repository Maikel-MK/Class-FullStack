
const express = require('express')
const app = express()
const path = require('path')
//const port = process.env.PORT || 3000 es para crear el puerto pero lo haremos de otra forma

//conexion mongoDB


//crear rutas de forntEnd Localhost
app.use('/',express.static(path.resolve('views','home')))
app.use('/tareas',express.static(path.resolve('views','tareas')))

//por cada ventana que se crea se debe actualizar el servidor y todas las carpetas deben tener su index por defecto


module.exports = app