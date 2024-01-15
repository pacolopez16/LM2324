function convertirTemp(grados){
    let valor = document.getElementById("grados").value;

    let resultado = 0;

    if (grados == "celsius"){

        resultado = (valor * 9/5) +32;
        document.getElementById("mensaje").innerHTML = resultado + "ºC";

    }
    else{
        resultado = (valor -32) *5/9;
        document.getElementById("mensaje").innerHTML = resultado + "ºF";
    }
    }