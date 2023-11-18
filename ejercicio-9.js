// Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos. Implementa la función denominada sumAll que toma un array de números como argumento y devuelve la suma de todos los números de la matriz.

const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(param) {
    let summation = 0;
    for (const number of param) {
        summation += number;
    }

    return summation;
}

const result = sumAll(numbers);
console.log(result);