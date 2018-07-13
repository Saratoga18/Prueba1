var nombreVariable=12;
var nombreVariable="Hola mundo";

var elemento=document.createElement('h2');
elemento.innerHTML="Texto vinculado por texto";
//Impresion consola elemento creado

console.log(elemento);

var contenedor=document.getElementsByClassName('contenedor');
contenedor[0].appendChild(elemento);

console.log(contenedor);

for(var i=0;i<10;i++){
    var elemento=document.createElement('h2');
    elemento.innerHTML=arregloText[i];
    contenedor[0].appendChild(elemento);
}
var arregloText=["el2","el3","el4","el5","el6"];
arregloText.forEach(function(interno)
{
    var elemento=document.createElement('h2');
    elemento.innerHTML=interno;
    contenedor[0].appendChild(interno);  
})

for (index in arregloText) {
    var elemento=document.createElement('h2');
    elemento.innerHTML=arregloText[index];
    contenedor[0].appendChild(interno);   
}

var estado = false;// true or false
/*estado=(1==3);
estado=("1"==1);
estado=(false);
estado=();
estado=();*/


var arregloText=["texto 11","texto 2","texto 5","texto 4","texto 8"];


var miFuncion=function(arg1,arg2,arg3)
{
    var respuesta=0;
    respuesta=arg1+arg2+arg3;
    return respuesta
}
miResultado=miFuncion(10,10,20);
console.log("El resultado es:" + resultado);



var palabra="Sometamos o matemos";
var esPalindrome=function(palabra){
    palabra=palabra.toLowerCase().replace(/\s/g,"");
    var palabraalreves=palabra.reverse();
    if (palabra==palabraalreves) {
            return true;
            console.log("Si es palindromo")
    }
    else {
        return false;
        console.log("No es palindromo")
    }       
}
