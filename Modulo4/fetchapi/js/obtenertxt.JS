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
        mostrarHTMLTXT(datos)
    })
    .catch(error=>{
        console.log(error)
    })
}

function mostrarHTMLTXT(data){
    const contenido = document.querySelector('#contenido')
    let texto = ''

    texto = data

    contenido.innerHTML = texto


}
