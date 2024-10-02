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
    console.log('campos llenos')
   }
}


function mostrarError(mensaje){
//hay un truco para evitar que el mensaje de error salga demasiado sin el setTimeout
const alerta = document.querySelector('.bg-red-100')

console.log(alerta)
//si null undefine es un false

if (!alerta){//aqui se niega la falsedad asi que se vuelve true "si no lo consigues CREALO"

    const alertaM = document.createElement('div')
        alertaM.innerHTML = mensaje
        alertaM.classList.add('bg-red-100')

        contenedor.appendChild(alertaM)
}
}