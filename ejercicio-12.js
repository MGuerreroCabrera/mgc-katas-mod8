// Valores únicos: Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados.

const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];

function removeDuplicates(param) {

    param.sort();
    
    for(let i = 0; i < param.length; i++){
        if(param[i] === param[i+1]){
            param.splice(i, 1);
        }
    }

    console.log(param);
}

removeDuplicates(duplicates);