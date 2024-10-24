const usuario = JSON.parse(localStorage.getItem('usuario'))
const formulario = document.querySelector('#form-todos')
const lista = document.querySelector('#todos-list')
const inputF = document.querySelector('#form-input')
const cerrarBTN = document.querySelector('#cerrar-btn')

if(!usuario){
    //no existe, no ha iniciado sesion  "es de forma local"
    window.location.href= '/'
}

const obtenerLista = async ()=>{
    const respuesta = await fetch('http://localhost:3000/tareas',{method:'GET'})
    const list = await respuesta.json()
    const userlist = list.filter(lista => lista.user === usuario.nombre)
    console.log(userlist)
    userlist.forEach(lista=>
    {
        const listado = document.createElement('li')
        listado.innerHTML = `
        <li id=${lista.id} class="todo-item">
        <button class="delete-btn">&#10006;</button>
        <p class="${lista.checked ? 'check-todo' : ''}">${lista.text}</p>
        <button class="check-btn">&#10003;</button>
        </li>
        `
        console.log(lista.text)
        lista.appendChild(listado)
        inputF.value
    })
}
obtenerLista()

formulario.addEventListener('submit',async e=>{
    e.preventDefault()

    const respuesta = await fetch('http://localhost:3000/tareas',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({texto:inputF.value,nombre:usuario.nombre})
    })
    obtenerLista()
    // const users = await respuesta.json()

    // const user = users.find(i=>i.nombre===loginInput.value)
})

lista.addEventListener('click',async e =>{
    if(e.target.classList.contains('delete-btn')){
        const id = e.target.parentElement.id
       // console.log(id)

       await fetch(`http://localhost:3000/tareas/${id}`,{
        method:'DELETE'})
        e.target.parentElement.remove()
    }else if(e.target.classList.contains('check-btn')){
      const id = e.target.parentElement.id

        const respuestaJSON = await fetch(`http://localhost:3000/tareas/${id}`,{
            method:'PATCH',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({checked:e.target.parentElement.classList.contains('check-todo')?false:true})
        })

        const response = await respuestaJSON.json()
        e.target.parentElement.classList.toggle('check-todo')
    }
})


cerrarBTN.addEventListener('click',async e =>{
    localStorage.removeItem('usuario')
    window.location.href='../home/index.html'
})
