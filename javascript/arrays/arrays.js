var padel = ["A.Coello", "Stupa", "Juan Lebrón", "Agus Tapia", "Chingotto", "Javi Garrido", "P.Navarro"]

function mostrar(){
    document.getElementById("resultado").innerHTML = padel
};

function borrar(){
    x = padel.pop();
    document.getElementById("caja").innerHTML = x
};


function añadir(){
   padel[padel.length] = document.getElementById("caja").value;
};

function ordenar(){
     
    document.getElementById("resultado").innerHTML = padel.sort();
}
function alreves(){
    padel.sort();
    document.getElementById("resultado").innerHTML = padel.reverse();
}
function buscar(){
    elemento = document.getElementById("caja").value;
    let position = padel.lastIndexOf(elemento) + 1;
    document.getElementById("resultado").innerHTML = elemento+ " está en " + position;
}