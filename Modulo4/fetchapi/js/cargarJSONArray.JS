const cargarJSONA = document.querySelector('#cargarJSONArray')
cargarJSONA.addEventListener('click',obtenerDatosjsonA)



function obtenerDatosjsonA(){
    const url = 'data/empleados.js'

    fetch(url)
    .then(respuesta=>{
        console.log(respuesta)
        return respuesta.json()// no hay de otra es un arreglo
    })

    .then(datos=>{
        console.log(datos)
        mostrarHTMLA(datos)
    })
    .catch(error=>{
        console.log(error)
    })
}

 function mostrarHTMLA(data){
    const contenido = document.querySelector('#contenido')
    let texto = ''

    data.forEach(i => {
        const {empresa,id,trabajo,nombre} = i
        
        texto +=`
    <p>Empleado: ${nombre}</p>
    <p>Id: ${id}</p>
    <p>Trabajo: ${trabajo}</p>
    <p>Empresa: ${empresa}</p>
    `
    });


    contenido.innerHTML = texto
}