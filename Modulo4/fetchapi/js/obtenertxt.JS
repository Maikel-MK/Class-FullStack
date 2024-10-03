const cargartxtBTN = document.querySelector('#cargarTxt')
cargartxtBTN.addEventListener('click',obtenerDatos)

function obtenerDatos(){

    const url = 'data/datos.txt'

    fetch(url)//aqui va la url que seria la conexion
    .then(respuesta=>{
        console.log(respuesta)
        return respuesta.text()//aqui se convierten los datos ya sea en texto o jeison
    })

    .then(datos=>{//aqui se muestra la conversion porque resive la el de arriba
        console.log(datos)
    })
    .catch(error=>{
        console.log(error)
    })
}


