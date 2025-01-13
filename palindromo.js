function palindromo(str) {
    str = str.toLowerCase().replace(/[\W_]/g, '');
    let reversed = str.split('').reverse().join('');
    return str === reversed;
}