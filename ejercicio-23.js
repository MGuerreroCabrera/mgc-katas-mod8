// Usa un bucle para crear 3 arrays de peliculas filtrados por categorias. Pelicula pequeña, menos de 100 minutos, pelicula mediana, mas de 100 minutos y menos de 200 y pelicula grande, mas de 200 minutos. Imprime cada array en por consola.

const movies = [
    { name: "Titan A.E.", durationInMinutes: 130 },
    { name: "Nightmare before Christmas", durationInMinutes: 225 },
    { name: "Inception", durationInMinutes: 165 },
    { name: "The Lord of the Rings", durationInMinutes: 967 },
    { name: "Star Wars: A New Hope", durationInMinutes: 214 },
    { name: "Terminator", durationInMinutes: 140 },
  ];

const smallFilms = [];
const middleFilms = [];
const longFilms = [];

for(let i = 0; i < movies.length; i++){
  if(movies[i].durationInMinutes < 100){
    smallFilms.push(movies[i]);
  }else if(movies[i].durationInMinutes > 100 && movies[i].durationInMinutes < 200){
    middleFilms.push(movies[i]);
  }else{
    longFilms.push(movies[i]);
  }
}

console.log(`Películas pequeñas:`);
console.log(smallFilms);
console.log(`Películas medianas:`)
console.log(middleFilms);
console.log(`Películas largas:`);
console.log(longFilms);