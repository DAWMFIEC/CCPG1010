// Import stylesheets
import './style.css';

//Dependencias instaladas
import $ from 'jquery';

//Función para convertir cualquier fecha en Español
let convertirES = (fecha:Date):string => {
  var options = { year: 'numeric', month: 'long', day: 'numeric' };
  var texto = fecha.toLocaleDateString("es-ES", options);
  return texto
};

/* La variable anuncios es un arreglo de objetos */
let anuncios:object[] = [
  {
    'tipo': "Asistencia",
    'titulo': "Niñera",
    'texto': "Saldremos por el fin de semana y necesitamos una niñera para que cuide los 3 niños (6,7 y 8 años)",
    'fecha': '03-June-2019',
    'barrio': "Sauces 8"
  },
  {
    'tipo': "Servicio",
    'titulo': "Mecánico",
    'texto': "Electromecánico a su casa",
    'fecha': '02-June-2019',
    'barrio': "La Saiba"
  },
  {
    'tipo': "Eventos",
    'titulo': "Fiesta",
    'texto': "Este sábado 15 de Junio celebraré mis quinceaños. Todos son bienvenidos. Regalo en sobre cerrado.",
    'fecha': '01-June-2019',
    'barrio': "Primavera 2"
  }
]

/* Cree la función aplicarPlantilla que recibe un anuncio (objeto del arreglo) */
/* Coloca la variable plantilla:string dentro de la función aplicarPlantilla con el siguiente contenido
  ` <div class="col-12 col-md-3">
      <div class="card border-secondary mb-3">
        <div id="tipo" class="card-header">
          ${anuncio["tipo"]}
        </div>
        <div class="card-body text-secondary">
          <h5 id='titulo' class="card-title">
            ${anuncio["titulo"]}
          </h5>
          <p class="card-text text-justify">
            ${anuncio["texto"]}
          </p>
          <p class="card-text">
            <small id="fecha" class="text-muted">
              ${anuncio["fecha"]}
            </small>
          </p>
          <a href="#" class="btn btn-primary">Contactar</a>
        </div>
        <div class="card-footer text-right">
          <small class="text-muted">
            ${anuncio["barrio"]}
          </small>
        </div>
      </div>
    </div>`
  
 */
/* Agrega la plantilla renderizada al elemento con id anuncios */



/* Aplica map al arreglo anuncios con la función aplicarPlantilla */

