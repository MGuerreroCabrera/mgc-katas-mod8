// Calcular promedio

const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(param) {
  let summatory = 0;

  for (const number of param) {
    summatory += number;
  }

  result = summatory / param.length;
  return result;
}

const averageNumber = average(numbers).toFixed(2);

console.log(averageNumber);