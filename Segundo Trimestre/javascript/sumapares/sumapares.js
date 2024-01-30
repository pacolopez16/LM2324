var numeros = []

function sumar(){
    var sumar = 0;
    for (var y = 0; y < numeros.length; y++) {
        if ( numeros [y] %2 === 0)
        sumar += parseFloat (numeros[y])
        document.getElementById("resultado").innerHTML = sumar;
    }
}

function anadir(){
    numeros [numeros.length] = document.getElementById("espacio").value 
    document.getElementById("resultado").innerHTML = numeros;
}