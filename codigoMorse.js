const CODIGO_MORSE = new Map([
    ['a', '.-'], ['b', '-...'], ['c', '-.-.'], ['ch', '----'],
    ['d', '-..'], ['e', '.'], ['f', '..-.'], ['g', '--.'],
    ['h', '....'], ['i', '..'], ['j', '.---'], ['k', '-.-'],
    ['l', '.-..'], ['m', '--'], ['n', '-.'], ['ñ', '--.--'],
    ['o', '---'], ['p', '.--.'], ['q', '--.-'], ['r', '.-.'],
    ['s', '...'], ['t', '-'], ['u', '..-'], ['v', '...-'],
    ['w', '.--'], ['x', '-..-'], ['y', '-.--'], ['z', '--..'],
    ['0', '-----'], ['1', '.----'], ['2', '..---'], ['3', '...--'],
    ['4', '....-'], ['5', '.....'], ['6', '-....'], ['7', '--...'],
    ['8', '---..'], ['9', '----.'], ['.', '.-.-.-'], [',', '-.-.--'],
    ['?', '..--..'], ['"', '.-..-.'], ['!', '--..--']
])

function textoAMorse(texto) {
    let caracteres = texto.toLowerCase().split('');
    let codigos = caracteres.map(caracter => CODIGO_MORSE.get(caracter));
    return codigos.join(' '); // Devuelve un string con los códigos separados por un espacio
}

console.log(textoAMorse('Hola, mundo!')); // Debería imprimir: ".... ---    .-.. --- .-     -- ..- -. -.. --- -.-.--"