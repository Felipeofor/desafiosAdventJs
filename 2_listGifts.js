const carta = 'bici coche balón _playstation bici coche peluche'

// Te ha llegado una carta ✉️ con todos los regalos que debes preparar. El tema es que es una cadena de texto y es muy difícil de leer 😱. ¡Menos mal que han puesto cada regalo separado por espacio! (aunque ten cuidado, porque al ser niños, igual han colado más espacios de la cuenta)

// Encima nos hemos dado cuenta que algunas palabras vienen con un _ delante de la palabra, por ejemplo _playstation, que significa que está tachado y no se tiene que contar.

// Transforma el texto a un objeto que contenga el nombre de cada regalo y las veces que aparece. Por ejemplo, si tenemos el texto:

// eliminiar _playstation

function listGifts(letter) {
    // ¡Tú puedes!
    let array = letter.trim().split(' ');
    let obj = {};
    array.forEach(element => {
        if (element.charAt(0) === '_') {
            return;
        }
        if (obj[element]) {
            obj[element]++;
        } else {
            obj[element] = 1;
        }
    });
    console.log(obj);
}
listGifts(carta)