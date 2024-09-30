const tamañoPizza = document.querySelector('#tamaño')
const ingredientesExtra = document.querySelector('#ingredientsE')
const Total = document.querySelector('#resultado p')
const orden = document.querySelector('#Elegido')
const cancelacion = document.querySelector('#Cancelar')
let Pizza = []

//enentos
tomarOreden()
function tomarOreden(){

    
}




function leerdatos(){
   
}





// function  crearHTML(){
//     limpiarHTML()
//     Pizza.forEach(i=>{
//         const row = document.createElement('tr') //tr: es table row = fila de la tabla
//         row.innerHTML = `
//         <td>
//         <img src="${i.imagen}"width=100>
//         </td>
//         <td>${i.nombre}</td>
//         <td>${i.precio}</d>
//         <td>${i.cantidad}</td>
//         <td>
//             <a href="#" id=${i.id} class="borrar-curso">X</a>
//         </td>
//         `

//         Total.appendChild(row)
//     })
// }


function limpiarHTML(){
    while(Total.firstChild){

        Total.removeChild(Total.firstChild)
    }
   }

function error(){

}