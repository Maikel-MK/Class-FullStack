//por cada modelo se hace un controlador & se coloca el nobre en singular
//1. hacer el router
//router: POST, GET, DELETE, UPDATE --- http

const userRouter = require('express').Router()
const User = require('../models/usuarios')

//hacer un registro -->POST = registrar la informacion que el usuario envia a travez de la informacion del formulario

//para llegar aca me deben llamar desde el front
userRouter.post('/', (request,response)=>{
    //destructuring
    const {nombre} = request.body

    //este console va a aparecer en la terminal de visual studio
    console.log(nombre)
   // console.log(request.body)
//todos los console que haga aca en modelos o controlador apareceran solo en la terminal
   if(!nombre){
        return response.status(400).json({error:'Todos los campos son OBLIGATORIOS'})
        //400 es error y 200 es correcto
   }else{
    //guardar en la BD
    let usuario = new User()//<-- es una instancia
      usuario.nombre = nombre

      async function guardarUsiario(){
         await usuario.save
         
         const listUsiarios = await User.find()
         console.log(listUsiarios)
      
      
      }

      guardarUsiario().catch(console.error)

      return response.status(200).json({msg:'Se ha creado el nuevo Usuario'})

   }
})


//para consultar
userRouter.get('/consultar-user',async (req,res)=>{
   
})

//obtener lista de usuarios
userRouter.get('/lista-users', async (req,res)=>{
   try{
      const listado = await User.find()
      return req.status(200).find({textOk:true,data:listado})
   }catch(error){
      return res.status(400).json({error:'Ha ocurrido un error'})
   }
})

module.exports - userRouter