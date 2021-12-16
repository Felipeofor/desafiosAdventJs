// El Grinch está abriendo las cartas que iban a Santa Claus y las está dejando hechas un lío.

// Las cartas son una cadena de texto que incluyen regalos y paréntesis ().

// Para saber si una carta es válida ✅, debes comprobar que los paréntesis cierran correctamente y que, además, no vayan vacíos.

// ¡Pero ojo! Porque el Grinch ha dejado llaves { y corchetes [ dentro de los paréntesis que hacen que no sean válidas. Por suerte sólo los ha dejado en medio de los paréntesis...

const carta = 'bici coche (balón) bici coche peluche';

function isValid(letter) {
    // ¡No dejes que el Grinch gane!
    if (letter.includes('()') || letter.includes('{') || letter.includes('[') ) {
        } else if (letter.includes('(') && letter.includes(')')) {
        console.log('La carta es válida');
    }
    console.log('La carta no es válida');
}
isValid(carta);