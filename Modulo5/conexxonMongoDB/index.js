const express = require('express')
const app = express()
const mongoose = require('mongoose')
const port = process.env.PORT || 9000

app.listen(port, ()=> console.log('server listen on port', port))


app.get('/',(req,res)=>{
    res.send('Bienvenido al Servidor')
})
