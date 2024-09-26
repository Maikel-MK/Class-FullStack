const cargarJSONbtn = document.querySelector('#cargarJSON')

cargarJSONbtn.addEventListener('click',obtenerDatosjson)

function obtenerDatosjson(){
    const url = 'data/empleado.json'

    fetch(url)
    .then(respuesta=>{
        console.log(respuesta)
        return respuesta.json()
    })

    .then(datos=>{
        console.log(datos)
        mostrarHTML(datos)
    })
    .catch(error=>{
        console.log(error)
    })
}

 function mostrarHTML(data){
    const {empresa,id,trabajo,nombre} = data

    const contenido = document.querySelector('#contenido')
    contenido.innerHTML = `
    <p>Empleado: ${nombre}</p>
    <p>Id: ${id}</p>
    <p>Trabajo: ${trabajo}</p>
    <p>Empresa: ${empresa}</p>
    `
}