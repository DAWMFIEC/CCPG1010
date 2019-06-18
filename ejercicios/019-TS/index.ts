// Import stylesheets
import './style.css';

/*
  Completar la clase Anuncio con los atributos necesarios del JSON en
  https://dataserverdaw.herokuapp.com/anuncios/json
*/

/* Completar la clase Plantilla */

import { Anuncio } from "./Anuncio";
/* Importar la clase Plantilla */


fetch('https://dataserverdaw.herokuapp.com/anuncios/json')
.then( response => response.json())
.then( data => {

    let anuncios = data.anuncios;
    
    /* Procesar anuncios para que cada anuncio se agregue al div#anuncios */


});

