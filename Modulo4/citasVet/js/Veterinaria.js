//selectores 

const mascota = document.querySelector('#mascota')
const propietario = document.querySelector('#propietario')
const telefono = document.querySelector('#telefono')
const fecha = document.querySelector('#fecha')
const hora = document.querySelector('#hora')
const sintomas = document.querySelector('#sintomas')
const formulario = document.querySelector('#nueva-cita')
const contenedorCitas = document.querySelector('#citas')

const objCitas ={
        mascota:'',
        propietario:'',
        telefono:'',
        fecha:'',
        hora:'',
        sintomas:''
}

//eventos
eventos()
function eventos(){

    formulario.addEventListener('submit',nuevaCita)
    // mascota.addEventListener('input', datosCita) //este toma caracter por caracter
    mascota.addEventListener('change', datosCita) //este toma entero
    propietario.addEventListener('change', datosCita)
    telefono.addEventListener('change', datosCita)
    fecha.addEventListener('change', datosCita)
    hora.addEventListener('change', datosCita)
    sintomas.addEventListener('change', datosCita)
}

class citas{
    constructor(){
        this.citas = []// this apunta sin necesidad de crearlo otravez, llamando con .this
    }

    agregarCita(cita){//aqui no hace falta poner funtion
        //this.citas.push(cita)
        this.citas = [...this.citas,cita]
        console.log(this.citas)
    } 

    eliminarCita(id){

    }

    editarCita(cita){

    }

/*CRUD:
    CREATE
    READ
    UPDATE
    DELETE*/

   /* Ejemplos:
    class STRING{
        constructor(){
            this.STRING =""
        }
        stringify(variable){

        }
        length(texto){

        }
    }*/

}

const administrarCitas = new citas()
//administrarCitas.
function nuevaCita(e){
    e.preventDefault()
  //  console.log('nueva cita')

  const {mascota, propietario, telefono, fecha, hora, sintomas} = objCitas

  if(mascota==='' || propietario==='' || telefono==='' || fecha===''|| hora===''|| sintomas===''){
    console.log('Todos los Campos son Obligatorios')
  }else{
    //agregar al arreglo o crear nueva cita
   // console.log('Estoy creando una vueva cita')

   administrarCitas.agregarCita({...objCitas})//aqui  es para crear el duplicado del objeto que estamos haciendo
  }
}

function datosCita(e){
    //console.log(e.target.name)//da el nombre del atributo
   objCitas[e.target.name] = e.target.value // aqui lo coloco de forma general con el e.target
   //console.log(objCitas)

}