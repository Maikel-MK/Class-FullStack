//para saber si una persona tiene internet o no

window.addEventListener('online',actualizarStatus)
window.addEventListener('offline',actualizarStatus)

console.log(navigator.onLine)

function actualizarStatus(){
    if(navigator.onLine == true){
        console.log('Hey Hay coneccion si pagaste jajaja')
    }else{
        console.log('Hey no hay conecion a PAGAAAAR XD')
    }
}