function loadData() {
    var currentUrl = document.URL;
    var urlParts = currentUrl.split('#');
    document.getElementById("seccion").innerText = urlParts[1]


    fetch("data/categorias.xml")
        .then(function(resultado) {
            return resultado.text()
        })
        .then(function(str) {
            var parser = new DOMParser()
            var xml = parser.parseFromString(str, "text/xml");
            // console.log(xml.getElementsByTagName('codigo'))

            /* Aquí para procesar el xml */

            var categorias = xml.getElementsByTagName("categoria");

            var div = document.getElementById('titulo')
            var ul = document.createElement('ul')

            for (var i = 0; i < categorias.length; i += 1) {
                var categoria = categorias[i]

                var codigo = categoria.getElementsByTagName('codigo')[0]
                if (codigo.textContent == urlParts[1]) {

                    var nombre = categoria.getElementsByTagName('nombre')[0]

                    var seccion = document.getElementById('seccion')
                    seccion.innerHTML = nombre.textContent

                    var libros = categoria.getElementsByTagName('libro')
                    for (var idx = 0; idx < libros.length; idx++) {

                        var libro = libros[idx].getElementsByTagName('nombre')[0]
                        var enlace = libros[idx].getElementsByTagName('openlibra')[0]

                        var li = document.createElement('li')
                        var a = document.createElement('a')
                        var texto = document.createTextNode(libro.textContent)

                        a.setAttribute("title", libro.textContent);
                        a.setAttribute("href", enlace.textContent);
                        a.setAttribute("target", "_blank");
                        a.setAttribute("class", "link");
                        a.appendChild(texto);

                        li.appendChild(a);
                        ul.appendChild(li);

                    }

                }
            }

            div.appendChild(ul)


        })
        .catch(function(error) {
            console.log('Hubo un problema con la petición Fetch:' + error.message);
        });

}

document.addEventListener('DOMContentLoaded', function() {
    loadData()
})