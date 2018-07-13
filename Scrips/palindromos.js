

var palabra="Sometamos o matemos";
var esPalindrome=function(palabra){
    palabra=palabra.toLowerCase().replace(/\s/g,"");
    palabra=palabra.split("")
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


