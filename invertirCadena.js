function invertirCadena(cad){
    //Paso 1. usar metodo split() para devolver un nuvero arreglo
    var separarCadena = cad.split("");
    //El resultado seria ["H", "o", "l", "a"]
    //Paso 2. usar metodo reverse() para invertir el arreglo
    var invertirCadena = separarCadena.reverse(); //Con este metodo se invierte el arreglo
    //El resultado seria ["a", "l", "o", "H"]
    //Paso 3. usar metodo join() para juntar los elementos del arreglo
    var unirCadena = invertirCadena.join(""); //Con este metodo se juntan los elementos del arreglo
    //El resultado seria "aloH"
    //Paso 4. imprimir el resultado
    return unirCadena;

}

let valor = invertirCadena("Hola");
console.log(valor);