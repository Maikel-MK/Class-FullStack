//Selectores:

const Estado = document.querySelector('#Estado')
const minimo = document.querySelector('#minimo')
const maximo= document.querySelector('#maximo')
const Edicion= document.querySelector('#Edicion')
const Categoria= document.querySelector('#Categoria')
const ISBN= document.querySelector('#ISBN')


const DatosBusqueda ={
    Estado:'',
    minimo:'',
    maximo:'',
    Edicion:'',
    Categoria:'',
    ISBN: ''
}

//eventos
//Carga de la data
document.addEventListener('DOMContentLoaded',()=>{
    mostrarLibros(libros)
    console.log(libros)
})

Estado.addEventListener('input',e=>{
    DatosBusqueda.Estado = e.target.value
    console.log(DatosBusqueda.Estado)
  filtrarLibro()
})

minimo.addEventListener('input',e=>{
    DatosBusqueda.minimo = Number(e.target.value)
    console.log(DatosBusqueda.minimo)
   filtrarLibro()
})

maximo.addEventListener('input',e=>{
    DatosBusqueda.maximo = Number(e.target.value)
    console.log(DatosBusqueda.maximo)
   filtrarLibro()
})

Edicion.addEventListener('input',e=>{
    DatosBusqueda.Edicion = e.target.value
    console.log(DatosBusqueda.Edicion)
  filtrarLibro()
})

Categoria.addEventListener('input',e=>{
    DatosBusqueda.Categoria = e.target.value
    console.log(DatosBusqueda.Categoria)
   filtrarLibro()
})

ISBN.addEventListener('input',e=>{
    DatosBusqueda.ISBN = e.target.value
    //console.log(DatosBusqueda.ISBN)
    filtrarLibro()
})

function mostrarLibros(Libros){
    limpiarHTMML()
    const Contenedor = document.querySelector('#resultado')

    Libros.forEach(Libro => {
        const LibroHTML = document.createElement('p')
        LibroHTML.innerHTML= `
        <p>
            ${Libro.ISBN} /// ${Libro.NombreLibro} /// ${Libro.Autor} /// ${Libro.Edicion} /// ${Libro.Categoria} /// ${Libro.Estado} /// ${Libro.Precio} 
        </p>`
        Contenedor.appendChild(LibroHTML)
    });
}

function filtrarLibro(){
    const resultado = libros.filter(filtrarEstado).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarEdicion).filter(filtrarCategoria).filter(filtrarISBN)

    console.log(resultado)

   if(resultado.length){
    mostrarLibros(resultado)
   }else{
        noResultado()
   }
   
}

function noResultado(){
    limpiarHTMML()
    const noResultado = document.createElement('div')
    noResultado.classList.add('alerta', 'error', 'text-blink')
    noResultado.appendChild(document.createTextNode('No Hay Resultados Para Su Busqueda'))
    document.querySelector('#resultado').appendChild(noResultado)
    
}

function limpiarHTMML(){
    const contenedor = document.querySelector('#resultado')

    while(contenedor.firstChild){
        contenedor.removeChild(contenedor.firstChild)
    }
}

function filtrarISBN(libro){
  
   // console.log(libro.ISBN)
    if(DatosBusqueda.ISBN){
        return libro.ISBN === DatosBusqueda.ISBN
    }

    return libro
    
}

function filtrarEstado(libro){
   
    if(DatosBusqueda.Estado){
        return libro.Estado === DatosBusqueda.Estado
    }
    return libro
}



function filtrarMinimo(libro){
    
    if(DatosBusqueda.minimo){
        return libro.Precio >= DatosBusqueda.minimo
    }
    return libro
}

function filtrarMaximo(libro){
    
    if(DatosBusqueda.maximo){
        return libro.Precio <= DatosBusqueda.maximo
    }
    return libro
}

function filtrarEdicion(libro){
    
    if(DatosBusqueda.Edicion){
        return libro.Edicion === DatosBusqueda.Edicion
    }
    return libro
}

function filtrarCategoria(libro){
   
    if(DatosBusqueda.Categoria){
        return libro.Categoria === DatosBusqueda.Categoria
    }
    return libro
}

