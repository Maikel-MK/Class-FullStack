//selectores 

const mascotaInput = document.querySelector('#mascota')
const propietarioInput = document.querySelector('#propietario')
const telefonoInput = document.querySelector('#telefono')
const fechaInput = document.querySelector('#fecha')
const horaInput = document.querySelector('#hora')
const sintomasInput = document.querySelector('#sintomas')
const formulario = document.querySelector('#nueva-cita')
const contenedorCitas = document.querySelector('#citas')
let editar

//Clases

class citas{
    constructor(){
        this.citas = []// this apunta sin necesidad de crearlo otravez, llamando con .this
    }

    agregarCita(cita){//aqui en  las clases no hace falta poner funtion
        //this.citas.push(cita)
        this.citas = [...this.citas,cita]// ... es hacer la copia
        console.log(this.citas)
    } 

    eliminarCita(id){
        this.citas = this.citas.filter(citas=>citas.id !== id)
    }

    editarCita(cita){
        this.citas = this.citas.map(citas=>citas.id === cita.id ? cita : citas)
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

class ui{   //ui = user interface

    imprimirAlerta(mensaje, tipo){
        const divMensaje = document.createElement('div')
        divMensaje.classList.add('text-center','alert','d-block','col-12')

        if(tipo==='error'){
            divMensaje.classList.add('alert-danger')
        }else{
            divMensaje.classList.add('alert-success')
        }

        //mostrar el mensaje de error en la interfaz

        divMensaje.textContent = mensaje

        //agregar el mensaje 
        document.querySelector('#contenido').insertBefore(divMensaje,document.querySelector('.agregar-cita'))

        setTimeout(()=>{
                divMensaje.remove()
        },3000)
    }


    imprimirCitas({citas}){
    //console.log('imprimircitas')
       this.limpiarHTML()

        citas.forEach(i=>{
            const {mascota, propietario, telefono, fecha, hora, sintomas, id} = i

            const divCita = document.createElement('div')
            divCita.classList.add('cita','p-3')
                //estamos creando un atributo personalizado
                divCita.dataset.id = id

                //generar textos para las fichas de las citas
                const mascotaParrafo = document.createElement('h2')
                mascotaParrafo.classList.add('card-title','font-weight-bolder')
                mascotaParrafo.textContent = mascota

                const propietarioParrafo = document.createElement('p')
                propietarioParrafo.innerHTML =
                `<spand class="font-weight-bolder">Propietario:</span>${propietario}`

                const telefonoParrafo = document.createElement('p')
                telefonoParrafo.innerHTML =
                `<spand class="font-weight-bolder">Telefono:</span>${telefono}`

                const fechaParrafo = document.createElement('p')
                fechaParrafo.innerHTML =
                `<spand class="font-weight-bolder">Fecha:</span>${fecha}`

                const horaParrafo = document.createElement('p')
                horaParrafo.innerHTML =
                `<spand class="font-weight-bolder">Hora:</span>${hora}`

                const sintomasParrafo = document.createElement('p')
                sintomasParrafo.innerHTML =
                `<spand class="font-weight-bolder">Sintomas:</span>${sintomas}`

                const btnEliminar = document.createElement('button')
                btnEliminar.classList.add('btn','btn-danger','mr-2')
                btnEliminar.innerHTML ='Eliminar <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>';
                btnEliminar.onclick = ()=> eliminarCita(id)

                const btnEditar = document.createElement('button')
                btnEditar.classList.add('btn','btn-info')
                btnEditar.innerHTML = 'Editar <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>'
                btnEditar.onclick = ()=> cargarEdicion(i)

                divCita.appendChild(mascotaParrafo)
                divCita.appendChild(propietarioParrafo)
                divCita.appendChild(telefonoParrafo)
                divCita.appendChild(fechaParrafo)
                divCita.appendChild(horaParrafo)
                divCita.appendChild(sintomasParrafo)
                divCita.appendChild(btnEliminar)
                divCita.appendChild(btnEditar)

                contenedorCitas.appendChild(divCita)               

        })
    }

limpiarHTML(){
    while(contenedorCitas.firstChild){
        contenedorCitas.removeChild(contenedorCitas.firstChild)
        }
    }
}


const objCitas ={
        mascota:'',
        propietario:'',
        telefono:'',
        fecha:'',
        hora:'',
        sintomas:''
}


//instancio las clases

const useri = new ui()
//para mostrar, limpiar, borrar


const administrarCitas = new citas()
//administrarCitas


//eventos
eventos()
function eventos(){

    formulario.addEventListener('submit',nuevaCita)
    // mascota.addEventListener('input', datosCita) //este toma caracter por caracter
    mascotaInput.addEventListener('change', datosCita) //este toma entero
    propietarioInput.addEventListener('change', datosCita)
    telefonoInput.addEventListener('change', datosCita)
    fechaInput.addEventListener('change', datosCita)
    horaInput.addEventListener('change', datosCita)
    sintomasInput.addEventListener('change', datosCita)
}



function nuevaCita(e){
    e.preventDefault()
  //  console.log('nueva cita')

  const {mascota, propietario, telefono, fecha, hora, sintomas} = objCitas

  if(mascota==='' || propietario==='' || telefono==='' || fecha===''|| hora===''|| sintomas===''){
    //console.log('Todos los Campos son Obligatorios')
        useri.imprimirAlerta('Todos los campos son Obligatorios','error')
        return
    }else if(editar){
       // console.log('Estoy editando')
       formulario.querySelector('button[type=submit]').textContent = 'Crear Cita'
       editar = false
       administrarCitas.editarCita({...objCitas})
    
       //mensaje de datos correctos
       useri.imprimirAlerta('Se ha modificado la cita Correctamente')
    }else{
    //agregar al arreglo o crear nueva cita
   console.log('Estoy creando una vueva cita')

    objCitas.id = Date.now()  // para agregar de forma externa un campo en el objeto
      administrarCitas.agregarCita({...objCitas})//aqui  es para crear el duplicado del objeto que estamos haciendo
      useri.imprimirAlerta('Se ha agregado su Cita Correctamente')

      //  console.log(objCitas)
    }


      //reset al formulario
      formulario.reset()
      reiniciarObjeto()
    useri.imprimirCitas(administrarCitas)
  
}

function datosCita(e){
    //console.log(e.target.name)//da el nombre del atributo
   objCitas[e.target.name] = e.target.value // aqui lo coloco de forma general con el e.target
   //console.log(objCitas)

}

function reiniciarObjeto(){
    objCitas.mascota = ''
    objCitas.propietario = ''
    objCitas.telefono = ''
    objCitas.fecha = ''
    objCitas.hora = ''
    objCitas.sintomas = ''
}

function eliminarCita(id){
   // console.log('eliminar Cita')
    administrarCitas.eliminarCita(id)

    //mostrar mensaje para figback
    useri.imprimirAlerta('La cita se ha eliminado Correctamente')

    //actualizar

    useri.imprimirCitas(administrarCitas)
}

function cargarEdicion(cita){
    console.log('editar citas')
    const {mascota, propietario, telefono, fecha, hora, sintomas, id} = cita
console.log(cita)
    //llenar los imputs

    mascotaInput.value = mascota;
   // console.log(mascotaInput.value)
    propietarioInput.value = propietario;
    telefonoInput.value = telefono
    fechaInput.value = fecha
    horaInput.value = hora
    sintomasInput.value = sintomas

    //vamos a llenar el objeto

    objCitas.mascota = mascota
    objCitas.propietario = propietario
    objCitas.telefono = telefono
    objCitas.fecha = fecha
    objCitas.hora = hora
    objCitas.sintomas = sintomas
    objCitas.id = id
console.log(objCitas)
    //Cambiamos el texto del boton
    formulario.querySelector('button[type=submit]').textContent = 'Guardar'

    editar = true

}