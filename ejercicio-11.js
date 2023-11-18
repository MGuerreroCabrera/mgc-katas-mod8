// Calcular promedio de strings: Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume.

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

function averageWord(param) {
  let summatory = 0;

  for (const mixedElement of param) {

    if(typeof mixedElement === "number"){
        summatory += mixedElement;
    }else if(typeof mixedElement === "string"){
        summatory += mixedElement.length;
    }
  }

  return summatory / param.length;

}

const result = averageWord(mixedElements).toFixed(2);
console.log(result);