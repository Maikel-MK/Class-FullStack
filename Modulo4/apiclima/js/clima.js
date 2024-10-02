//se esta utilizando una api llamada openweathermap

//ahora hay que agregar los selectores crear los eventos:

const ciudad = document.querySelector('#ciudad')
const pais = document.querySelector('#pais')
const  resultado = document.querySelector('#resultado')
const formulario = document.querySelector('#formulario')


window.addEventListener('load',()=>{
    formulario.addEventListener('submit',buscarClima)
})

function buscarClima(e){
    e.preventDefault()
   // console.log('buscar clima')
   console.log(ciudad,pais)
}