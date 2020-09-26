var x;
var y;
var ope;
/* 
localStorage.setItem('Pantalla', "");
localStorage.setItem('NuevoNumero', "");
localStorage.setItem('Operacion', "")
document.getElementById('pantalla').value = 0; */

//Llamado de elementos
//pantalla
//pantalla = document.getElementById('pantalla');
//numeros
document.getElementById('n1').addEventListener('click',n1);
document.getElementById('n2').addEventListener('click',n2);
document.getElementById('n3').addEventListener('click',n3);
document.getElementById('n4').addEventListener('click',n4);
document.getElementById('n5').addEventListener('click',n5);
document.getElementById('n6').addEventListener('click',n6);
document.getElementById('n7').addEventListener('click',n7);
document.getElementById('n8').addEventListener('click',n8);
document.getElementById('n9').addEventListener('click',n9);
document.getElementById('n0').addEventListener('click',n0);
document.getElementById('punto').addEventListener('click',punto);
//operaciones aritmeticas
document.getElementById('mas').addEventListener('click',suma);
document.getElementById('menos').addEventListener('click',resta);
document.getElementById('por').addEventListener('click',multiplicacion);
document.getElementById('entre').addEventListener('click',division);
//igual
document.getElementById('igual').addEventListener('click',igual);
//resultado y borrado
document.getElementById('c').addEventListener('click',c);
document.getElementById('del').addEventListener('click',del);



/*
let ce = document.getElementById('ce');
//otras operaciones
let porcentaje = document.getElementById('porcentaje');
let un = document.getElementById('unx');
let x2 = document.getElementById('x2');
let r2 = document.getElementById('r2');
let masmenos= document.getElementById('masmenos');

//Captura de eventos
*/

//funciones ingresar numeros
function n1(){
    pantalla.value = pantalla.value + "1" 
}
/* pantalla2.innerHTML = "HolaMundo" */
function n2(){
    pantalla.value = pantalla.value + "2"
}
function n3(){
    pantalla.value = pantalla.value + "3"
}
function n4(){
    pantalla.value = pantalla.value + "4"
}
function n5(){
    pantalla.value = pantalla.value + "5"
}
function n6(){
    pantalla.value = pantalla.value + "6"
}
function n7(){
    pantalla.value = pantalla.value + "7"
}
function n8(){
    pantalla.value = pantalla.value + "8"
}
function n9(){
    pantalla.value = pantalla.value + "9"
}
function n0(){
    pantalla.value = pantalla.value + "0"
}
function punto(){
    pantalla.value = pantalla.value + "."
}
/////////////////////////////////////////////////////////////////////////
//funciones operacionesAritmeticas
function suma() {
    x = pantalla.value;
    ope = "+";
    limpiaPantalla()
    console.log('Var x: ', x)
}
function resta() {
    x = pantalla.value;
    ope = "-";
    limpiaPantalla()
}
function division() {
    x = pantalla.value;
    ope = "/";
    limpiaPantalla()
}
function multiplicacion() {
    x = pantalla.value;
    ope = "*";
    limpiaPantalla()
}
/////////////////////////////////////////////////////////////////////////
//funcion igual
function c(){
    limpiaPantalla()
}

function igual(){
    y = pantalla.value;
    
    operaciones();
}

function operaciones(){
    var resultado;
    switch (ope) {
        case '+':
            resultado = parseFloat(x) + parseFloat(y);
            console.log(x)
            console.log(y)
            console.log(ope)
            break;
        case '-':
            resultado = parseFloat(x) - parseFloat(y);
            break;
        case '/':
            resultado = parseFloat(x) / parseFloat(y);
            break;
        case '*':
            resultado = parseInt(x) * parseInt(y);
            break;
    }
    pantalla.value = resultado;
    x = resultado;
}

//Limpiar pantalla
function limpiaPantalla(){
    pantalla.value = ""
}

function del(){
    pantalla.value = pantalla.value.slice(0, -1);
}




