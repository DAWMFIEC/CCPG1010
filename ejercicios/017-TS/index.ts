// Importar la hoja de estilo
import './style.css';

// Agregar las dependecias: bootstrap, con sus dependencias, y @types/jquery

// Importar @types/jquery
import $ from 'jquery';

// Título del sitio
const titulopagina:string = "Anuncios";

// Crear un elemento h1 y agregar el título
let h1 = $('<h1></h1>');
h1.append(titulopagina);

// Agregar el h1 al elemento con id contenedor_titulo
$('#titulopagina').append(h1);


//Agregue la variables tipo, título, texto y barrio con los valores que tiene a continuación
/*
  Tipo: Asistencia
  Título: Se necesita niñera
  Texto: Saldremos por el fin de semana y necesitamos una niñera para que cuide los 3 niños (6,7 y 8 años).
  Barrio: Sauces 8
*/ 

//let tipo:string = "Asistencia";




/* Agregue el contenido de las variables a los elementos correspondientes en el HTML */
//$('#tipo').text(tipo)





/* La función convertirES transforma una fecha en un formato en español */
let convertirES = (fecha:Date):string => {
  var options = { year: 'numeric', month: 'long', day: 'numeric' };
  var texto = fecha.toLocaleDateString("es-ES", options);
  return texto
};

/* Cree la variable fechaPublicacion de tipo Date con la fecha '03-Jun-2019' */
let fechaPublicacion:Date = new Date('03-Jun-2019')

/* Asigna el resultado de la llamada a convertirES con la variable fechaPublicacion */
let fechaES:string = convertirES(fechaPublicacion);


/* La función asignarFecha recibe una texto que se asigna al elemento con el id fecha  */
let asignarFecha = (fechaTexto:string) => {
  $('#fecha').text(fechaTexto)
}


/* 
  Crea la función ejecutarCallback que recibe una textoFecha:string y un callback. 
  Dentro de la función, llame a la función callback y envíe el argumento textoFecha
 */


/* Llama a la función ejecutarCallback y envíe la variable fechaES y la función asignarFecha */