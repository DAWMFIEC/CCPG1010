var mymap = L.map('mapid').setView([-2.192084, -79.879981], 11);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiYWF2ZW5kYW4iLCJhIjoiY2p3NnVzdHozMjdxeDQzcXBnYjlwMTRqcyJ9.S00xReWyD9_Eb4B1h-VgIg'
}).addTo(mymap);

var marker1 = L.marker([-2.128404, -79.902846]);
var marker2 = L.marker([-2.227159, -79.894034]);
var marker3  = L.marker([-2.176700, -79.842989]);

/* Selecciona las etiquetas h5 */
/* document.getElementsByTagName( ) */



/* 
Agrega la funcionalidad para desplazar la vista 
hasta la ubicación de marker1 cuando pase el mouse por encima
*/
/* onmouseover */
/* marker1.getLatLng() */
/* mymap.setView( [lat,lng] , zoom ) */



/* 
Agrega la funcionalidad para agregar el marcador marker1 
cuando dé clic en el título
*/
/* onclick */
/* marker1.addTo(mymap) */


