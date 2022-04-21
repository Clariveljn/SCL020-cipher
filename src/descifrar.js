import cipher from './cipher.js';

//console.log(cipher);

//Convertir texto ingresado en mayusculas
document.getElementById("mensaje").addEventListener("keyup", mayuscula);
function mayuscula (){
    let mensaje = document.getElementById("mensaje");
    mensaje.value = mensaje.value.toUpperCase();
}

//descifrar mensaje
document.getElementById("descifrar").addEventListener("click", function () {
    let mensaje = document.getElementById("mensaje").value; 
    let desplazamiento = parseInt(document.getElementById("desplazamiento").value);
    document.getElementById("resultado").value = cipher.decode(desplazamiento,mensaje);
});