// Usa un for para remplazar todas las comidas que no sean veganas con las frutas del array de frutas. Recuerda no usar frutas duplicadas. Finalmente, imprime el array resultante.

const fruits = ["Strawberry", "Banana", "Orange", "Apple"];
const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];
// 0. crear contador para array fruits para evitar frutas repetidas
let counter = 0;

for (let i = 0; i < foodSchedule.length; i++) {
    
    // 1. recorrer array y comprobar si la propiedad isVegan es igual a false
    if(foodSchedule[i].isVegan === false){
        // 2. cambiar la propiedad name por una fruta e indicar que ahora sí es vegano
        foodSchedule[i].name = fruits[counter];
        foodSchedule[i].isVegan = true;
        counter++;
    }    
}

// 3. imprimir el array de comidas modificado
console.log(foodSchedule);