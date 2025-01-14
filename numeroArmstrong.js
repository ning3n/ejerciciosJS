function esNumeroArmstrong(numero){
    let numeroString = numero.toString();
    let longitud = numeroString.length;
    let suma = 0;
    for(let i = 0; i < longitud; i++){
        suma += Math.pow(parseInt(numeroString[i]), longitud);
    }
    return suma === numero;
}