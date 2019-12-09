/*
 Comentario en JavaScript
 */
console.log("\n Variables y salida por pantalla \n")
var nombrePrograma = "Siempre JavaScript, nunca Java";
console.log(nombrePrograma);

/* 
Crea y muestra las variables valor1 y valor2. Asigna el resultado de la suma en resultadoSuma. Muestra el resultado por pantalla. 
*/




/* Las arreglo se crean con el objeto Array */
console.log("\n Arreglos \n")
var xmen = new Array("Magneto", "Jean-X", "Bestia-X", "Quicksilver","Tormenta-X","Selene","Xavier-X", "Cíclope-X","Red Lotus", "Nightcrawler-X");

console.log("Mutantes")
for(var idx = 0; idx < xmen.length; idx++) {
  console.log("Nombre: ", xmen[idx])
}

/* Crea un arreglo con tres nombres de personajes de películas o comics. Recorre el arreglo con un while para mostrar sus elementos.  */



/* Las funciones pueden especificarse con o sin argumentos */
console.log("\n Funciones \n")
function soloXmen(arr) {
  console.log("X-men")
  for(var idx = 0; idx < arr.length; idx++) {
    if (arr[idx].indexOf("-X") != -1)
      console.log("Nombre: ", arr[idx])
  }
}
soloXmen(xmen)

/* Crea una función que muestre los nombres de los personajes que comiencen por la letra 'A'. Llama a la función y revisa los resultados*/