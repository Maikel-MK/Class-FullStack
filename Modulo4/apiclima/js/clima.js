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
    const appid = '0d53411182e6bb904570600774d18dd0'
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appid}`

    Spinner()

    fetch(url)
    .then(respuesta=>{//el status 200 quiere decir que se conecto bien y 404 que no se conecto bien
        //console.log(respuesta)
        return respuesta.json()
    })
    .then(datos=>{
        //console.log(datos)
       

        if (datos.cod ==='404'){
            mostrarError('La ciudad no se ha Encontrado, Ingresa una ciudad valida por favor')
        }else{
            
             mostrarHTML(datos)

        }
        //console.log(datos.cod)
       
    })

    .catch(error=>{
        console.log(error)
    })
}

function gradosKelvinaC(temperatura){
    return temperatura-273.15
}

function mostrarHTML(data){
    limpiarHTML()
    console.log(data)


    const {name,main:{temp,temp_max,temp_min}} = data//para acceder y sacar los daton en vez de hacer main.tem. etc etc se hace main:{temp} y asi es mas directo

    //console.log(name,temp,temp_max,temp_min)

    //convertir a grados celsius

    const TA = Math.round(gradosKelvinaC(temp))//quitamos los decimales
    const TMa = Math.round(gradosKelvinaC(temp_max))
    const TMm = Math.round(gradosKelvinaC(temp_min))


    //mostrar resultados en el HTML

    const nCiudad = document.createElement('p')
    nCiudad.innerHTML = `El Clima en: ${name}`
    nCiudad.classList.add('text-white','text-center','text-3xl')

    const tempA = document.createElement('p')
    tempA.innerHTML = `${TA}`
    tempA.classList.add('text-white','text-center','text-6xl')

    const min = document.createElement('p')
    min.innerHTML = `Temp min: ${TMm}`
    min.classList.add('text-white','text-center')

    const max = document.createElement('p')
    max.innerHTML = `Temp max: ${TMa}`
    max.classList.add('text-white','text-center')

    resultado.appendChild(nCiudad)
    resultado.appendChild(tempA)
    resultado.appendChild(min)
    resultado.appendChild(max)
}

function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild)
    }
}

function Spinner(){
limpiarHTML()

 const divspinner = document.createElement('div')
 divspinner.classList.add('loader')
 divspinner.innerHTML = `
 <span class="loader"></span>`   

 resultado.appendChild(divspinner)
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

