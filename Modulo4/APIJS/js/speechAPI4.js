const microfono = document.querySelector('#microfono')
const salida = document.querySelector('#salida')

//evento
microfono.addEventListener('click',ejecutarSpeechAPI)

function ejecutarSpeechAPI(){
    const speechrecognition = webkitSpeechRecognition

    const recognition = new speechrecognition()

    /*
    esto esta compuesto por fases:

    1.  debo arrancar ese reconocimiento que seria pedir permiso para activar el microfono que seria ejecutar el reconocimiento
    
    2 una vez activo comenzar a escuchar
    
    3 esperar que el usuario deje de hablar
    
    4 mostrar el resultado como texto
    */

    recognition.start()
    recognition.onstart = function(){//aqui reconoce que una vez que se de el permiso comience a escuchar

        //comience a escuchar

        salida.classList.add('mostrar')

    }
    salida.textContent = 'chismeando...'

    recognition.onspeechend = function(){
        salida.textContent = 'Ya no es interesante ...'
        recognition.stop()
    }

    //lo que hayamos grabado lo mostramos como texto
    recognition.onresult = function(e){
        console.log(e.results)

        const{confidence,transcript} = e.results[0][0]

        //console.log(confidence,transcript)

        // if(confidence >= 0.9){
        //     console.log('siii', transcript)
        // }else{
        //     console.log('nooo')
        //}

        //salida.textContent = transcript

        const confianza = document.createElement('p')
        confianza.innerHTML = `Confianza: ${confidence}`

        const speech = document.createElement('p')
        speech.innerHTML = `lo que escuche: ${transcript}`

        salida.appendChild(speech)
        salida.appendChild(confianza)
    }
}

