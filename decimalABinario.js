function decimalABinario(num) {
    var resultado = '';
    while (num > 0) {
        resultado = (num % 2) + resultado;
        num = Math.floor(num / 2);
    }
    return resultado;
}
console.log(decimalABinario(10)); // Debería imprimir 1010