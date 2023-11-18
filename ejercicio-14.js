// Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma. 

const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];
  function repeatCounter(param) {
    let counter = 0;
    let word = "";

    for(let i = 0; i < param.length; i++)
    {
        word = param[i];
        for(j = i+1; j < param.length; j++)
        {
            if(word == param[j]){
                counter++;
            }
        }
        if(counter != 0){
            counter+=1;
        }
        console.log(`La parabra ${word} se aparece ${counter} veces`);
        counter = 0;
    }
  }

  repeatCounter(counterWords);