//Notificaciones Nativas de JS
const notificarBTN = document.querySelector('#notificar')
const verNotiBTN = document.querySelector('#verNotificacion')


notificarBTN.addEventListener('click',()=>{
    //Notificaciones API
    
    Notification
        .requestPermission()
        .then(resultado=>{
            console.log('el resultado es: ',resultado)
        })
})

verNotiBTN.addEventListener('click',()=>{
    console.log('ver')
    console.log(Notification.permission)
    if(Notification.permission === 'granted'){
        const notiVentana = new Notification('Aqui esta la NOTIFICACION!!!!',{
            icon: 'img/edetecnica.png',
            body: 'Enviando Notificacion'
        })

        notiVentana.onclick = function(){
            window.open('https://google.com')
        }
    }
})