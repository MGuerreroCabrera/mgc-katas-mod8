// Completa la función que tomando dos números como argumento devuelva el más alto

function sum(numberOne , numberTwo) {
    const resultado = numberOne > numberTwo ? numberOne : numberTwo;
    return resultado;
}

const resultadoDevuelto = sum(15, 8);
console.log(resultadoDevuelto);