/*
Requerimiento AJAX al API de OpenLibra (JSON)

$.getJSON('http://www.etnassoft.com/api/v1/get/?any_tags=[html,css,javascript]&order=newest&callback=?', function(results) {
    console.log('Search Result(s): ', results);
});
*/

function loadBooks() {

    $.getJSON('http://www.etnassoft.com/api/v1/get/?any_tags=[html,css,javascript]&order=newest&callback=?', function(results) {


        for (var idx = 0; idx < results.length; idx++) {

            book = results[idx];

            var div = $('<div></div>')
            div.attr('class','col-4 text-center')

    		var h5 = $('<h5></h5>')
    		h5.text(book.title)

    		var img = $('<img>')
    		img.attr('src',book.thumbnail)
            
            var h6 = $('<h6></h6>')
    		h6.text(book.author)

    		var p = $('<p></p>')
    		var a = $('<a></a>')
    		a.text("[Descargar]")
    		a.attr('href', book.url_download)
    		a.attr('target','_blank')
            p.append(a)

            div.append(h5)
            div.append(img)
            div.append(h6)
            div.append(p)

            $('#resultados').append(div)
        }

    });

}


document.addEventListener('DOMContentLoaded', function() {
    loadBooks()
})

