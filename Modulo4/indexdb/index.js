let db

document.addEventListener('DOMContentLoaded',()=>{

    //llamar una funcion para crear la db

    crmDB()
    setTimeout(() => {
        crearCliente()
    }, 5000);
})

function crmDB(){
    //Crear DB con INDEXDB
    let crmDB = window.indexedDB.open('crmDB',1)

    //Si hay un error

    crmDB.onerror=function(){
        console.log('Hubo un error')
    }

    //no hay error
    crmDB.onsuccess = function(){
        console.log('Base de datos fue creada')
        db = crmDB.result
    }


    //Configurar la base de datos con este metodo y aqui en onupgradeneeded solo se va aejecitar una sola vez
    crmDB.onupgradeneeded = function(e){
        console.log('prueba')
        const db = e.target.result
        const objectStore = db.createObjectStore('crmDB',{
            keyPath:'crmDB',
            autoIncrement: true
        })

           //Definir las columnas que vamos a usar 
    objectStore.createIndex('nombre','nombre',{unique:false})
    objectStore.createIndex('email','email',{unique:true})
    objectStore.createIndex('telefono','telefono',{unique:false})

    }




}

function crearCliente(){
    let transaction = db.transaction(['crmDB'],'readwrite')
    transaction.oncomplete = function(){
        console.log('la transaccion a sido creada')
    }

    transaction.onerror = function(){
        console.log('a ocurrido un error')
    }

    //crear objeto

    const objectStore = transaction.objectStore('crmDB')
    const nuevoCliente = {
        nombre: 'Maikel',
        telefono:123456,
        email:'Mai@gmail.com'
    }

    let peticion = objectStore.add(nuevoCliente)
    console.log(peticion)
}



//Nota:
 //   El key path me aparece como crmd y no como null