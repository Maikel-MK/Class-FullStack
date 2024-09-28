const marca = document.querySelector('#marca')
const year = document.querySelector('#year')
const minimo = document.querySelector('#minimo')
const maximo = document.querySelector('#maximo')
const puertas = document.querySelector('#puertas')
const transmision = document.querySelector('#transmision')
const color = document.querySelector('#color')
const resultado = document.querySelector('#resultado')

const max = new Date().getFullYear()//con getdate se muestra lo que es el dia segun la de la pc
const min = max - 10
//console.log(max)

//eventos
document.addEventListener('DOMContentLoaded',()=>{//en ()=> se usa para llamar las funciones y es mas del tipo general ya que mas tarde le puedo agregar mas funciones y si lo hago para una funcion expecifica entonces en vez de colocar ()=> coloco la funcion
//llenar el listado de select year
    llenarSelect()
  //  console.log(autos)
  mostrarAutos(autos)
})

marca.addEventListener('input',e=>{
    datosBusqueda.marca =  e.target.value
   // console.log(datosBusqueda.marca)
   filtrarAuto()
})
year.addEventListener('input',e=>{
    datosBusqueda.year = Number( e.target.value)
   // console.log(datosBusqueda.year)
   filtrarAuto()
})
minimo.addEventListener('input',e=>{
    datosBusqueda.minimo = Number( e.target.value)
   // console.log(datosBusqueda.minimo)
   filtrarAuto()
})
maximo.addEventListener('input',e=>{
    datosBusqueda.maximo = Number( e.target.value)
   //console.log(datosBusqueda.maximo)
   filtrarAuto()
})
puertas.addEventListener('input',e=>{
    datosBusqueda.puertas = Number( e.target.value)
   //console.log(datosBusqueda.puertas)
   filtrarAuto()
})
transmision.addEventListener('input',e=>{
    datosBusqueda.transmision = e.target.value
   //console.log(datosBusqueda.transmision)
   filtrarAuto()
})
color.addEventListener('input',e=>{
    datosBusqueda.color = e.target.value
   //console.log(datosBusqueda.color)
   filtrarAuto()
})



function mostrarAutos(arregloA){

    limpiarHTML()

    arregloA.forEach(i => {
        //console.log(i.marca)
        const{marca,modelo,year,precio,puertas,transmision,color} = i

        const autoHTML = document.createElement('p')
        autoHTML.textContent = `${marca} - Modelo: ${modelo} - Año: ${year} - Precio: ${precio} - Puertas: ${puertas} - ${transmision} - ${color}`

        resultado.appendChild(autoHTML)
    
    });
}

function limpiarHTML(){
    const contenedor = document.querySelector('#resultado')

    while(contenedor.firstChild){
        contenedor.removeChild(contenedor.firstChild)
    }
}


function llenarSelect(){
    for (let i = max ; i >= min+1; i--){
     //   console.log(i)     

     const opcion = document.createElement('option')
     opcion.value = i
     opcion.textContent = i

     year.appendChild(opcion)//
    }

}

//datos para la busqueda

const datosBusqueda = {
    marca:'',
    year:'',
    minimo:'',
    maximo:'',
    puertas:'',
    transmision:'',
    color:''
}

//Crear los eventos asociados al proyecto (Evento:todo aquello que me permita hacer captura por pantalla)


function filtrarAuto(){
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarColor).filter(filtrarPuertas).filter(filtrarTransmision)
    //console.log(resultado)

    if(resultado.length){
        mostrarAutos(resultado)
    }else{
        noResultado()
    }
    
}

function noResultado(){
    limpiarHTML()
    const noResultado = document.createElement('div')
    noResultado.classList.add('alerta','error')
    noResultado.appendChild(document.createTextNode('No Hay Resultados Para su Busqueda'))
    document.querySelector('#resultado').appendChild(noResultado)
}

function filtrarMarca(auto){
    if(datosBusqueda.marca){
        return auto.marca === datosBusqueda.marca
    }
    return auto
}

function filtrarYear(auto){
    if(datosBusqueda.year){
        return auto.year === datosBusqueda.year
    }
    return auto
}

function filtrarMinimo(auto){
    if(datosBusqueda.minimo){
        return auto.precio >= datosBusqueda.minimo
    }
    return auto
}

function filtrarMaximo(auto){
    if(datosBusqueda.maximo){
        return auto.precio <= datosBusqueda.maximo
    }
    return auto
}

function filtrarPuertas(auto){
    if(datosBusqueda.puertas){
        return auto.puertas === datosBusqueda.puertas
    }
    return auto
}

function filtrarTransmision(auto){
    if(datosBusqueda.transmision){
        return auto.transmision === datosBusqueda.transmision
    }
    return auto
}

function filtrarColor(auto){
    if(datosBusqueda.color){
        return auto.color === datosBusqueda.color
    }
    return auto
}




