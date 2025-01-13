function palindromo(str) {
    // Paso1 pon en minuscula la cadena y usa rexEXP para eliminar caracteres especiales
    var re = /[^A-Za-z0-9]/g;

    var lowRegStr = str.toLowerCase().replace(re, '');
    // Paso2 crea una variable para almacenar la cadena al reves
    var reverseStr = lowRegStr.split('').reverse().join('');
    // Paso3 compara las cadenas
    return reverseStr === lowRegStr;
}

console.log(palindromo("A man, a plan, a canal. Panama"));  // Devuelve true