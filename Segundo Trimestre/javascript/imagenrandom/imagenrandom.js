let archivos=["osasuna.jpg","almeria.png","cadiz.png","sevilla.jpg","mallorca.jpg"];
function random(min,max){
    return Math.floor((Math.random() * (max - min + 1))+min);
}
function seleccionaImagen(){
let numero = random(0,archivos.length - 1);
document.getElementById("imagen1").src = "images/" + archivos[numero];
}