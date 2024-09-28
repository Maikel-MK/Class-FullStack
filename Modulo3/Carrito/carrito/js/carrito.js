//1--definir o crear las variables
const listaCursos = document.querySelector('#lista-cursos')
const vaciarCarritoBTN = document.querySelector('#vaciar-carrito')
const carrito = document.querySelector('#carrito')
const contenedorCarrito = document.querySelector('#lista-carrito tbody')

/*objeto Estudiante={
var nombre:"",
var ci:"",
let notas[]
}

objet materias={
nombreM:,
}

*/

//2--pensar en que estructura vamos a guardar
let articulosCarrito = []//declarando un arreglo vacio

//3--Definir eventos
cargarEventos()
function cargarEventos(){       //funcion

    //click al boton de agregar carrito
    listaCursos.addEventListener('click',agregarCurso)
    vaciarCarritoBTN.addEventListener('click',()=>{
        articulosCarrito=[]
        vaciarCarrito()
    })
    carrito.addEventListener('click', eliminarCurso)
}

function agregarCurso(e){
    e.preventDefault()
   // console.log('yey ingreseeee')

   // console.log(e.target) me permite saber en donde estoy posicionado cuando doy click en algun lado de la pag
   //console.log(e.target.classList)me permite saber que clases son a lo que estoy clickeando
   //console.log(e.target.classList.contains('agregar-carrito')) para probar si donde se supone que debemos dar click si funciona con true y false

   if(e.target.classList.contains('agregar-carrito')){
    //ingresa si estoy haciendo click en el boton
    //const curso = e.target.parentElement  para saber el elemento padre
    const curso = e.target.parentElement.parentElement
    leerDatosCurso(curso)
   }
}


   function leerDatosCurso(curso){
    console.log(curso)

    const infoCurso = {
        imagen:curso.querySelector('img').src,
        nombre:curso.querySelector('h4').textContent,
        precio:curso.querySelector('span').textContent,
        id:curso.querySelector('a').getAttribute('data-id'),
        cantidad:1

    }
    console.log(infoCurso)



    if(articulosCarrito.some(i=>i.id === infoCurso.id)){
        // los === se usan en js para comparar dos datos 
        //some es util para los arreglos porque al usarlo se puede saber si es true o false ya que es un booleano
        //caso de que existe el curso en el arreglo de articulosCarrito


        const cursos = articulosCarrito.map(i=>{
            if(i.id === infoCurso.id){
                //itero, visito cada posicion y si encuentro el id,
                //entonces aumento en 1 la cantidad
                i.cantidad++
                return i
                //debo retornar la posicion completa
                //porque map requiere que retorne el arreglo
            }else{
                return i
            }
        })

           // console.log(cursos)

    }else{
        //no tengo el curso agrgegado
        articulosCarrito = [...articulosCarrito,infoCurso]
        // los tres puntos es que lo duplique (...) en este caso duplica a articules carrito y solo cambian los datos de infoCurso
        console.log(articulosCarrito)
     }

     //para mostrar en el html

     mostrarCarritoHTML()
   }

   function mostrarCarritoHTML(){
    vaciarCarrito()
    articulosCarrito.forEach(i=>{
        const row = document.createElement('tr') //tr: es table row = fila de la tabla
        row.innerHTML = `
        <td>
            <img src="${i.imagen}"width=100>
        </td>
        <td>${i.nombre}</td>
        <td>${i.precio}</d>
        <td>${i.cantidad}</td>
        <td>
            <a href="#" id=${i.id} class="borrar-curso">X</a>
        </td>
        `

        contenedorCarrito.appendChild(row)
    })
   }

   function vaciarCarrito(){
     //forma lenta
    // contenedorCarrito.innerHTML = ''

    //forma Rapida
    while(contenedorCarrito.firstChild){

        contenedorCarrito.removeChild(contenedorCarrito.firstChild)

        //con la condicion que tenga por lo menos un elementto hijo este se va aejecutar hasta remover todos los hijos y vaciar la pantalla
    }
   }
    
   function eliminarCurso(e){
    e.preventDefault()
 
    if(e.target.classList.contains('borrar-curso')){
    //esta haciendo click para borrar curso

    const cursoID = e.target.getAttribute('id')

   // console.log(cursoID)

if(articulosCarrito.some(i=>i.id === cursoID)){
//caso en que existe el curso en el arreglo
    const cursos = articulosCarrito.map(i=>{
        if(i.id === cursoID){
            //encuentra el curso
            if(i.cantidad>1){
                i.cantidad--
                return i
            }else{
                //return i
                articulosCarrito = articulosCarrito.filter(i=>i.id
                    !== cursoID
                )
                console.log(articulosCarrito)
            }

        }
    })

       // console.log(cursos)

        }
        mostrarCarritoHTML()
    }//fin if clase borrar curso
}//fin funcion
/*

//console.log(contenedorCarrito)*/