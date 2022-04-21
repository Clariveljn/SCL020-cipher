# Cifrado César

## 1. Preámbulo

Cifrar significa codificar. El [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher)
es uno de los primeros métodos de cifrado conocidos. El emperador romano Julio
César lo usaba para enviar órdenes secretas a sus generales en los campos de
batalla.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

El cifrado césar es una de las técnicas más simples para cifrar un mensaje. Es
un tipo de cifrado por sustitución, es decir que cada letra del texto original
es reemplazada por otra que se encuentra un número fijo de posiciones
(desplazamiento) más adelante en el mismo alfabeto.

Por ejemplo, si usamos un desplazamiento (_offset_) de 3 posiciones:

* La letra A se cifra como D.
* La palabra CASA se cifra como FDVD.
* Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

En la actualidad, todos los cifrados de sustitución simple se descifran con
mucha facilidad y, aunque en la práctica no ofrecen mucha seguridad en la
comunicación por sí mismos; el cifrado César sí puede formar parte de sistemas
más complejos de codificación, como el cifrado Vigenère, e incluso tiene
aplicación en el sistema ROT13.

## 2. Resumen del proyecto

Cipher Chat es una aplicación web que sirve para que el usuario
pueda cifrar y descifrar un mensaje seleccionando previamente la clave (desplazamiento).
La temática elegida es una herramienta de mensajeria secreta diseñada para mujeres.
Las tecnologías utilizadas son HTML, CSS y JavaScript.

### Definición del producto

Los principales usuarios son mujeres mayores de 18 años, que necesiten enviar mensajes cifrados, 
por ejemplo para organizar eventos masivos a favor de los derechos de las mujeres.
Los objetivos de las usuarias son poder comunicarse con confianza y que sus mensajes puedan ser 
comprendidos sólo por quienes ellas decidan.
Cipher Chat resuelve esta necesidad, ya que, permite cifrar y descifrar mensajes utilizando una clave 
para poder comprender los mensajes.

### Elección paleta de colores

Este proyecto se ha diseñado pensando en mujeres como principales usuarias por lo que para la paleta de colores 
se seleccionaron colores pastel y bordes redondeados para botones y otros elementos con el proposito de una 
interfaz visualmente más amable.

La paleta de colores seleccionada es la siguiente:

https://github.com/Clariveljn/SCL020-cipher/tree/main/Paleta.png

### Primer Prototipo 

El primer prootipo consistia en tres vista, la primera donde el usuario elige si quiere cifrar o descifrar un mensaje, 
la degunda para cifrar un mensaje y la tercera para descifrarlo.

Este prototipo fue creado utilizando FIGMA.
https://www.figma.com/proto/7eq6Cja3qgm4pcoCn59xBQ/Primer-Prototipo-Cipher?node-id=156%3A3&starting-point-node-id=156%3A3


### Segundo Prototipo 

En el segundo prototipo se mantienen los tonos pastel, las tres vistas, se reubican botones y se les da el mismo estilo, 
ademas, se modifica el estilo de las areas para ingresar texto, se incorporan nuevos botones y se decide incorporar un input 
type range para seleccionar la clave.

https://www.figma.com/proto/4xU3LcbSqmCYFkzcPVuNLx/prototipo2-Cipher?node-id=2%3A32&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=2%3A32







