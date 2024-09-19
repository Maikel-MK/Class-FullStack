function Convertir(){
    var form=''
    var Seg=document.Segundos.Sds.value

    minutos= Seg/60
    horas= Seg*(1/3600)

    alert('Hay: '+'\n--'+Seg+'  Segundos\n--'+minutos+'  Minutos\n--'+horas+'  Horas')
    document.getElementById('Sds').value=''
}


function Verificar(){
    var form=''
    var Año=document.Año_B.Añb.value
    

    if(Año%4==0){
        alert('El año '+Año+' Es BISIESTO')
        document.getElementById('Añb').value=''
    }else if(Año%100==0 & Año%400==0){
        alert('El año '+Año+' Es BISIESTO')
        document.getElementById('Añb').value=''
    }else if(Año%4!=0 || Año%100!=0 || Año%400!=0){
        alert('El año '+Año+' NO Es BISIESTO')
        document.getElementById('Añb').value=''
    }
}

function Indicador(){
    var form=''
    var Letra_C=document.Carter.Cct.value
    if(Letra_C==0 || Letra_C>0){
        alert(Letra_C+'  Es un Digito')
        document.getElementById('Cct').value=''
    }else if(Letra_C=='A'||Letra_C=='E'||Letra_C=='I'||Letra_C=='O'||Letra_C=='U'||Letra_C=='a'||Letra_C=='e'||Letra_C=='i'||Letra_C=='o'||Letra_C=='u'){
        alert(Letra_C+'  Es una Vocal')
        document.getElementById('Cct').value=''
    }else if(Letra_C=='Q'||Letra_C=='q'||Letra_C=='W'||Letra_C=='w'||Letra_C=='R'||Letra_C=='r'||Letra_C=='T'||Letra_C=='t'||Letra_C=='Y'||Letra_C=='y'||Letra_C=='P'||Letra_C=='p'||Letra_C=='S'||Letra_C=='s'||Letra_C=='D'||Letra_C=='d'||Letra_C=='F'||Letra_C=='f'||Letra_C=='G'||Letra_C=='g'||Letra_C=='h'||Letra_C=='H'||Letra_C=='J'||Letra_C=='j'||Letra_C=='K'||Letra_C=='k'||Letra_C=='L'||Letra_C=='l'||Letra_C=='Ñ'||Letra_C=='ñ'||Letra_C=='Z'||Letra_C=='z'||Letra_C=='X'||Letra_C=='x'||Letra_C=='C'||Letra_C=='c'||Letra_C=='V'||Letra_C=='v'||Letra_C=='B'||Letra_C=='b'||Letra_C=='N'||Letra_C=='n'||Letra_C=='M'||Letra_C=='m'){
        alert(Letra_C+'  Es una Consonante')
        document.getElementById('Cct').value=''
    }else{
        alert('Es un Caracter Especial')
        document.getElementById('Cct').value=''
    }
}

function Determinar(){
    var form=''
    var Detet=document.D_p.Dg.valueAsNumber

    if(Detet%2==0){
        alert('El Número '+Detet+' Es Par')
        document.getElementById('Dg').value=''
    } else{
        alert('El Número '+Detet+' Es Impar')
        document.getElementById('Dg').value=''
    }
}

function Valores(){
    alert('Ingrese Sus Valores a Elegir')
    Valor1=parseInt(prompt('Ingrese Su 1er Valor'))
    Valor2=parseInt(prompt('Ingrese Su 2do Valor'))

    if(Valor1>Valor2){
        alert('El Máximo Es: '+Valor1)
    }else{
        alert('El Máximo Es: '+Valor2)
    }
    
}

function V_Absoluto(){
    var form=''
    var Adb=document.Abs.abb.valueAsNumber

    alert('El Valor Absoluto de:'+Adb+'\n Es: '+Math.abs(Adb))
    document.getElementById('abb').value=''
}



function ResSS(){
    var V1=document.Signo.s1.valueAsNumber
    var V2=document.Signo.s2.valueAsNumber
  
    if(V1>0 & V2>0){
        alert('El Signo es Positivo')
        document.getElementById('s1').value=''
        document.getElementById('s2').value=''

    }else if(V1>0 & V2<0 & V1>Math.abs(V2)){
        alert('El Signo es Positivo')
        document.getElementById('s1').value=''
        document.getElementById('s2').value=''

    }else if(V1<0 & V2>0 & V2>Math.abs(V1)){
        alert('El Signo es Positivo')
        document.getElementById('s1').value=''
        document.getElementById('s2').value=''

    }else if(V1==0 & V2==0){
        alert('El Signo es Positivo')
        document.getElementById('s1').value=''
        document.getElementById('s2').value=''

    }else if(V1==0 & V2>0 & V1<Math.abs(V2)){
        alert('El Signo es Positivo')
        document.getElementById('s1').value=''
        document.getElementById('s2').value=''

    }else if(V1>0 & V2==0 & V1>Math.abs(V2)){
        alert('El Signo es Positivo')  
        document.getElementById('s1').value=''
        document.getElementById('s2').value=''

    }else if(V1==0 & V2<0 & V1<Math.abs(V2)){
        alert('El Signo es Negativo')
        document.getElementById('s1').value=''
        document.getElementById('s2').value=''

    }else if(V1>0 & V2<0 & Math.abs(V2)>V1){
        alert('El Signo es Negativo')
        document.getElementById('s1').value=''
        document.getElementById('s2').value=''

    }else if(V1<0 & V2<0){
        alert('El Signo es Negativo')
        document.getElementById('s1').value=''
        document.getElementById('s2').value=''

    }else if(V1<0 & V2>0 & Math.abs(V1)>V2){
        alert('El Signo es Negativo')
        document.getElementById('s1').value=''
        document.getElementById('s2').value=''

    }else if(V1<0 & V2==0 & Math.abs(V1)>V2){
        alert('El Signo es Negativo')
        document.getElementById('s1').value=''
        document.getElementById('s2').value=''
    }

}


function Descomposicon(){
    var Descomponer=parseInt(document.Solicitud_D.num_4d.value)

    if(Descomponer<=9999 & Descomponer>999){
        var mil, cien,decena,unidad,cosiente,resto
        unidad= Descomponer%10
        cosiente=Math.trunc(Descomponer/10)
        decena=cosiente%10
        resto=Math.trunc(cosiente/10)
        cien=resto%10
        mil=Math.trunc(resto/10)

        
        alert('el Resultado de La Descomposicion Es:\n'+'--Unidades de Mil: '+mil*1000+'\n--Centenas: '+cien*100+'\n--Decenas: '+decena*10+'\n--Unidades: '+unidad)
        document.getElementById('num_4d').value=''

        
    }
    
    
}

function Notas(){
    var nota1=document.Notas_a.P_Pal.valueAsNumber
    var nota2=document.Notas_a.S_Pal.valueAsNumber
    var nota3=document.Notas_a.P_Qu.valueAsNumber
    var nota4=document.Notas_a.S_Qu.valueAsNumber
    var nota5=document.Notas_a.P_Py.valueAsNumber
    var nota6=document.Notas_a.S_Py.valueAsNumber

    var Definitiva

    Definitiva= nota1+nota2+nota3+nota4+nota5+nota6

    if(Definitiva>=9 & Definitiva<9.5){
        alert('El Alumno Debe Ir a RECUPERACION'+'\nSu Nota es: '+Definitiva)
    }else if(Definitiva>0 & Definitiva<9){
        alert('El Alumno Esta REPROBADO'+'\nSu Nota es: '+Definitiva)
    }else if(Definitiva>9.5){
        alert('El Alumno Esta APROVADO'+'\nSu Nota es: '+Definitiva)
    }else[
        alert('ERROR')
    ]
}