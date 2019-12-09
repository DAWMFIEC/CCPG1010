/*
 */

function justificarNosotros() {
    /* Selecciona el elemento con el id nosotros */
    /* document.getElementById( ) */

    var nosotros = document.getElementById("nosotros");
    // console.log(nosotros);


    /* Agrega la clase text-justify */
    /* 

    node.className += 

    	o 

    node.setAttribute('class', node.getAttribute('class') +  );

    */

    // nosotros.className += " text-justify"
    nosotros.setAttribute('class', nosotros.getAttribute('class') + ' text-justify')
    // console.log(nosotros)

}


// Crear la función agregarBordes 
// Esta función se encargará de seleccionar todos los elementos con la clase: seccion (getElementsByClassName)
// para agregar las clases: p-4 rounded 

function agregarBordes() {
  var secciones = document.getElementsByClassName('seccion');

  for(idx in secciones) {
    secciones[idx].className += ' p-4 rounded';
  }
}

// Crea la función cambiarFooter
// Esta función se encargará de seleccionar al elemento en el siguiente path: footer div.container p (querySelector)
// para agregar la clase: whiter

function cambiarFooter() {
  var pFooter = document.querySelector("footer div.container p")

  pFooter.className += ' whiter'
}


// Crea la función agregarDisclaimer
// Selecciona el último elemento div (getElementsByTagName)
// Crea un nodo de tipo p (createElement) y nodo de texto (createTextNode)
// Al nodo de tipo p agrega las clases: 'm-0 small'
// Al nodo de tipo texto agrega 'Este es un sitio de distribución de contenido gratuitos'
// Al final (appendChild) del nodo de tipo p agrega el nodo de texto
// En el último div, inserta el p antes (insertBefore) del primer hijo (firstChild) del último div

function agregarDisclaimer() {
  var divs = document.getElementsByTagName('div')
  lastDiv = divs[divs.length-1]

  var p = document.createElement('p')
  var txt = document.createTextNode('Este es un sitio de distribución de contenido gratuitos')

  p.className = 'm-0 small whiter'
  p.appendChild(txt)

  lastDiv.insertBefore(p, lastDiv.firstChild)

}

// Crea la función mostrarTopico

// Esta función selecciona todos los elementos de clase seccion 
// aplica los callbacks a los eventos onmouseover y onmouseout 
// para mostrar/ocultar los elementos con clase topico/logo-seccion respectivamente

function show(idx) {
  return function() {
      document.getElementsByClassName("topico")[idx].classList.toggle('d-none');
      document.getElementsByClassName("logo-seccion")[idx].classList.toggle('d-none');
    }
}

function hide(idx) {
  return function() {
      document.getElementsByClassName("topico")[idx].classList.toggle('d-none');
      document.getElementsByClassName("logo-seccion")[idx].classList.toggle('d-none');
    }
}

function mostrarTopico() {

  var secciones = document.getElementsByClassName('seccion')

  for(var idx = 0 ; idx < secciones.length; idx++) {
    var seccion = secciones[idx];

    
    seccion.addEventListener('mouseover', show(idx));
    seccion.addEventListener('mouseout', hide(idx));

  }


}


document.addEventListener('DOMContentLoaded', function() {
  // Llamada a las funciones
  justificarNosotros();
  agregarBordes();
  cambiarFooter();
  agregarDisclaimer();
  mostrarTopico();
})
