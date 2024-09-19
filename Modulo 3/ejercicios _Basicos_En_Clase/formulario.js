function miPrimerFormulario(){
    var form = ""
    var usuario = document.form1.usuario.value
    console.log(usuario)
    var nombre = document.form1.nombre.value
    console.log(nombre)
    var apellido = document.form1.apellido.value
    console.log(apellido)
    var email = document.form1.email.value
    console.log(email)
    var password = document.form1.password.value
    console.log(password)
    var password2 = document.form1.password2.value
    console.log(password2)
    var hobbies = ""
    var Pais = document.form1.Pais.value
    console.log(Pais)
    var Sexo = document.form1.Sexo.value
    console.log(Sexo)
    var b =document.form1.hobby.length
    for(i=0;i<b;i++){
        if(document.form1.hobby[i].checked){
            //caso en que el checkbox este marcado
            hobbies+=document.form1.hobby[i].value+","
        }
    }
    console.log(hobbies)
}
//parseInt cambia los enteros que se ingresan desde pantalla como numero