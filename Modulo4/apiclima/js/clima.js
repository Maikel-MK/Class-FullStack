//se esta utilizando una api llamada openweathermap

//ahora hay que agregar los selectores crear los eventos:

const contenedor = document.querySelector('.container')
const  resultado = document.querySelector('#resultado')
const formulario = document.querySelector('#formulario')


window.addEventListener('load',()=>{
    formulario.addEventListener('submit',buscarClima)
})

function buscarClima(e){
    e.preventDefault()
   // console.log('buscar clima')
   
const ciudad = document.querySelector('#ciudad').value
const pais = document.querySelector('#pais').value
   //console.log(ciudad,pais)

   if(ciudad === ""  || pais === ""){
    mostrarError('Los campos son obligatorios')
   }else{
    //console.log('campos llenos')
    consultarAPI(ciudad,pais)
   }
}

function consultarAPI(ciudad,pais){
    const appid = 'd512dcb1f52d42110fc4ec113a530b11'
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appid}`

    fetch(url)
    .then(respuesta=>{//el status 200 quiere decir que se conecto bien y 404 que no se conecto bien
        //console.log(respuesta)
        return respuesta.json()
    })
    .then(datos=>{
        console.log(datos)
    })
}


function mostrarError(mensaje){  //esto funciona para los errores

//hay un truco para evitar que el mensaje de error salga demasiado sin el setTimeout
const alerta = document.querySelector('.bg-red-100')

console.log(alerta)
//si null undefine es un false

if (!alerta){//aqui se niega la falsedad asi que se vuelve true "si no lo consigues CREALO"

    const alertaM = document.createElement('div')
        alertaM.innerHTML = `<strong>${mensaje}</strong>`
        alertaM.classList.add('bg-red-100', 'text-center', 'text-red-500', 'py-3', 'mt-4', 'max-w-md', 'mx-auto', 'bg-red-300')

        contenedor.appendChild(alertaM)
        setTimeout(() => {
            alertaM.remove()
        },3000)
    }
}