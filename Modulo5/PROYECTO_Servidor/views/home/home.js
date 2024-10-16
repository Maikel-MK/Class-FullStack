const formC= document.querySelector('#form-create')
const formL= document.querySelector('#form-login')
const createInput = document.querySelector('#create-input')
const notificacion = document.querySelector('.notification')

formC.addEventListener('submit', e=>{
    e.preventDefault()
//console.log(createInput.value)
    if(!createInput.value){

        //si el campo esta vacio
        console.log('campo vacio')

        notificacion.innerHTML = "El Campo no Puede Estar Vacio"
        notificacion.classList.add('show-notification')

        setTimeout(()=>{
            notificacion.classList.remove('show-notification')
        },2000)
    }else{
        
    }

})