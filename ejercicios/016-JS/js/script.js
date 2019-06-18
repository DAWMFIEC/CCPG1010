/* Cuando se termine de cargar el documento deberá solicitar el documento data/vecinos.xml al servidor */

$(document).ready(function() {

    $.ajax({
        url: "data/vecinos.xml",
        success: function(respuesta) {
            
            $(respuesta).find("VECINO").each(function() {
               
                

                /* Crear la estructura que se encuentra en el archivo HTML */
                var div = $('<div></div>').addClass('col-md-3')
                div.attr('id', $(this).find("ID").text()) 
                
                var div1 = $('<div></div>').addClass('card mb-4 shadow-sm border-top-0 border-right-0 border-bottom-0 border-info');

                var img = $('<img>').addClass('card-img-top')
                img.attr('src','http://chittagongit.com/download/219686')

                var div2 = $('<div></div>').addClass('card-body')

                var h5 = $('<h5></h5>').addClass('card-title')
                var p = $('<p></p>').addClass('card-text')
                var div3 = $('<div></div>').addClass('d-flex justify-content-between align-items-center')

                var small = $('<small></small>').addClass('text-muted')

                small.text($(this).find("BARRIO").text())

                h5.text($(this).find("NOMBRES").text() + " "+ $(this).find("APELLIDOS").text())

                p.text($(this).find("FAMILIA").text())

                div3.append(small)

                div2.append(h5)
                div2.append(p)
                div2.append(div3)

                div1.append(img);
                div1.append(div2);
                

                div.append(div1);
                

                $('#resultadosVecinos').append(div)

            });
        }
    });

    /* Enlazar con el evento click para filtar los vecinos de acuerdo a los criterios de búsqueda */
    /* $('#busqueda').val()  */

    $('button').click(function(){

      var divs = $('.col-md-3');

      divs.each(function() { $(this).show() });

      var textoBusqueda = $('#busqueda').val();
      if(textoBusqueda.length > 0) {
        var divs = $('.col-md-3');

        divs.each(function() {
           
           var h5 = $(this).find('h5')
           
           if(h5.text().indexOf(textoBusqueda) >= 0) {
            $(this).show()
           } else {
             $(this).hide()
           }

        })

      } else {
        divs.each(function() { 
          $(this).show()
        })
      }
      return false;
    })

})