var notas = []

function anadirnota(){
 
   var realizar = parseFloat(document.getElementById("box").value);
    if (realizar > 10 || realizar < 0){
    document.getElementById("resultado").innerHTML = "Este número no es válido"
}
    else{
        notas[notas.length] = document.getElementById("box").value
        document.getElementById("resultado").innerHTML = notas
    }
}


function borrarnota(){
for (y in notas){
    notas.pop()
    document.getElementById("resultado").innerHTML = notas
}
}


function hacermedia(){
var media = 0
for (var y = 0; y < notas.length; y++){
    media +- parseFloat(notas[y]);
}

document.getElementById("resultado").innerHTML = media/y

}