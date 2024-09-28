//crear selectores
const formulario = document.querySelector('#formulario')
const listaTweets = document.querySelector('#lista-tweets')
let tweets = []//<-- estructura para almacenar los tweets


//eventos
eventListener()
function eventListener(){
    formulario.addEventListener('submit',agregarTweet)
}

function agregarTweet(e){
e.preventDefault()
//console.log('funciona?')

const tweet = document.querySelector('#tweet').value

//console.log(tweet)

if(tweet===''){
    //console.log('nda')
mostarError('El Tweet no Puede Estar Vacio')
return

}else{
const contador = tweet.length
console.log('Hay '+contador+' Caracteres')
if(contador>250){
    //console.log('Mas de 150')
    sobrepasado('El twet no Puede Tener mas de 250 caracteres')
    return
}else{
    const tweetobj = {
        tweet: tweet,
        id: Date.now()
    }
    tweets = [...tweets,tweetobj]
//console.log(tweets)
}
}

crearHTML()
formulario.reset()
}

function mostarError(mensaje){
    const mensajeError = document.createElement('p')
    mensajeError.textContent = mensaje
    mensajeError.classList.add('error')
//mensaje de error
    const contenido = document.querySelector('#contenido')
    contenido.appendChild(mensajeError)

//tiempo de errorr :

setTimeout(()=>{
    mensajeError.remove()
},1500)
}

function sobrepasado(mensaje){
    const mensajeError = document.createElement('p')
    mensajeError.textContent = mensaje
    mensajeError.classList.add('sobrepasado')
//mensaje de error
    const contenido = document.querySelector('#textoVal')
    contenido.appendChild(mensajeError)

//tiempo de errorr :

setTimeout(()=>{
    mensajeError.remove()
},1500)
}

function crearHTML(){
    //console.log('hay HTML?')

    limpiarHTML()

    if(tweets.length > 0){
        //min debe haber 1 twt en el arreglo
        tweets.forEach(tweets=>{
            const li =document.createElement('li')
            const btnEliminar = document.createElement('a')
            btnEliminar.classList.add('borrar-tweet')
            btnEliminar.innerText = 'X'

            btnEliminar.onclick = ()=>{
                borrarTweet(tweets.id)   
            }


            li.innerText = tweets.tweet
            li.appendChild(btnEliminar)
            listaTweets.appendChild(li)
        })
        }
}


function limpiarHTML(){
    while(listaTweets.firstChild){
        listaTweets.removeChild(listaTweets.firstChild)
    }
}

function borrarTweet(id){
   // console.log('borre!!!')
    tweets = tweets.filter(tweets => tweets.id !== id)
    //console.log(tweets)
    crearHTML()
}