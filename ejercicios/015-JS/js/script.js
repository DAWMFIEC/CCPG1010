/* Cuando se termine de cargar el documento deberá solicitar el documento data/vecinos.xml al servidor */

$(document).ready(function() {

    $.ajax({
        url: "data/vecinos.xml",
        success: function(respuesta) {
            
            $(respuesta).find("VECINO").each(function() {
               
                console.log($(this).find("NOMBRES").text())

                /* Crear la estructura que se encuentra en el archivo HTML */
                /* var div = $('<div></div>').addClass('col-md-3') */
                /* div.attr('atributo', 'valor') */ 
                /* $('#resultadosVecinos').append(div) */

            });
        }
    });

    /* Enlazar con el evento click para filtar los vecinos de acuerdo a los criterios de búsqueda */
    /* $('#busqueda').val()  */


})