import cipher from './cipher.js';

//console.log(cipher);

//Convertir texto ingresado en mayusculas
document.getElementById("mensaje").addEventListener("keyup", mayuscula); //traigo el mensaje con getElementById y escucho el evento keyup
function mayuscula (){                                                   //con la funcion mayuscula tomo el valor del mensaje y con el metodo toUpperCase lo paso a mayusculas
    let mensaje = document.getElementById("mensaje");                    //guardo el mensaje en una variable
    mensaje.value = mensaje.value.toUpperCase();                         //pasamos a mayusculas
}


// cifrar mensaje
document.getElementById("cifrar").addEventListener("click", function () {         //Cuando damos click al boton cifrar se llama a una funcion anonima
let mensaje = document.getElementById("mensaje").value;                           //guardo el menaje en una variable
let desplazamiento = parseInt(document.getElementById("desplazamiento").value);   //guardo el desplazamiento en una variable y con parseInt pasa a integer
document.getElementById("resultado").value = cipher.encode(desplazamiento,mensaje); //la función devuelve el mensaje cifrado tomando desde el metodo encode el desplazamiento y mensaje
});

