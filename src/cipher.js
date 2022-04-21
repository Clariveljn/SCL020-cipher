const cipher = {

    encode (desplazamiento,mensaje) {                                      //llamamos a la funcion encode a la que le pasamos el desplazamiento y el mensaje 
       if (desplazamiento==null || desplazamiento=="" || desplazamiento==[] || desplazamiento==0 || mensaje==null || mensaje=="" || mensaje==0){
      throw new TypeError()}                                                //error                         

      let resultado = "", code;                                             //creamos la variable resultado, esta almacenara el mensaje cifrado
      for (let i=0; i<mensaje.length;i++){                                  //recorrer el texto
        if (mensaje.charCodeAt(i)>=65 && mensaje.charCodeAt(i)<=90){        //si la letra esta entre el indice 65 y 90 del codigo assci
          code = (((mensaje.charCodeAt(i)-65)+desplazamiento)%26)+65;       //aplico formula 
        }
        else if (mensaje.charCodeAt(i) >= 33 && mensaje.charCodeAt(i) <= 66) { //si esta entre 33 y 66
          code = (((mensaje.charCodeAt(i) + 33) - desplazamiento) % 33) + 33;  //aplico formula
        }
        else if (mensaje.charCodeAt(i)===32){                                 //si esta en el indice 32 se mantiene el caracter (espacio)
          code = 32;
        }
        resultado=resultado+String.fromCharCode(code);                        //resultado guarda el mensaje cifrado
      }
      return resultado;                                                       //devueve el mensaje cifrado
    },
  
  
     decode (desplazamiento, mensaje) {                                        //llamamos a la funcion encode a la que le pasamos el desplazamiento y el mensaje
       if (desplazamiento==null || desplazamiento=="" || desplazamiento==[] || desplazamiento==0 || mensaje==null || mensaje=="" || mensaje==0){
      throw new TypeError()}                                                   //Error

      let resultado = "", code;                                                //creamos la variable resultado, esta almacenara el mensaje descifrado
      for (let i=0; i<mensaje.length;i++){                                     //recorrer el texto
        if (mensaje.charCodeAt(i)>=65 && mensaje.charCodeAt(i)<=90){           //si la letra esta entre el indice 65 y 90 del codigo assci
          code = (((mensaje.charCodeAt(i)+65)-desplazamiento)%26)+65;          //aplico formula
        }
       else if (mensaje.charCodeAt(i) >= 33 && mensaje.charCodeAt(i) <= 66) {  //si esta entre 33 y 66
          code = (((mensaje.charCodeAt(i) + 33) + desplazamiento) % 33) + 33;  //aplico formula
        }
        else if (mensaje.charCodeAt(i)===32){                                  //si esta en el indice 32 se mantiene el caracter (espacio)
          code = 32;
        }
        resultado+=String.fromCharCode(code);                                  //resultado guarda el mensaje descifrado
      }
      return resultado;                                                        //devueve el mensaje descifrado
    },
  };
  
  export default cipher;