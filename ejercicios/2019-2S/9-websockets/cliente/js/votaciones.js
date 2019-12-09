var ws;

let like = (codigo) => {
    var msg = {
        "type": "update",
        "codigo": codigo
    };

    ws.send(JSON.stringify(msg));
}

let loadBooks = (libros) => {

    document.getElementById('libros').innerHTML = ''

    for (var idx = 0; idx < libros.length; idx++) {

        let libro = libros[idx]

        let col = document.createElement("col")
        col.setAttribute("class", "col mb-3")

        let card = document.createElement("div")
        card.setAttribute("class", "card")

        let img = document.createElement("img")
        img.setAttribute("src", libro.src)
        img.setAttribute("class", "card-img-top")

        let cardbody = document.createElement("div")
        cardbody.setAttribute("class", "card-body")


        let h5 = document.createElement("h5")
        h5.innerHTML = libro.votos + " votos"
        h5.setAttribute("class", "card-title")
        h5.setAttribute("id", libro.codigo)

        let p = document.createElement("p")
        p.innerHTML = libro.autor
        p.setAttribute("class", "card-text")

        cardbody.appendChild(h5)
        cardbody.appendChild(p)

        let cardfooter = document.createElement("div")
        cardfooter.setAttribute("class", "card-footer")

        let votar = document.createElement("button")
        votar.setAttribute("class", "btn btn-success")
        votar.setAttribute("type", "button")
        votar.addEventListener('click', () => {
            like(libro.codigo)
        })
        votar.innerHTML = "Votar"

        cardfooter.appendChild(votar)

        card.appendChild(img)
        card.appendChild(cardbody)
        card.appendChild(cardfooter)

        col.appendChild(card)

        document.getElementById('libros').append(col)
    }

}


/*
    Establece conexión con el servidor de websockets
*/

let conectar = () => {
    console.log("Conectado")
}

/*
    Muestra los mensajes que envía el servidor de websockets
*/

let mensajes = (evento) => {
    let libros = JSON.parse(evento.data)

    loadBooks(libros)

    // for (let libro of libros) {
    //     document.getElementById(libro["codigo"]).innerHTML = libro['votos'] + " votos"
    // }
}

let crearWS = () => {
    if ("WebSocket" in window) {

        // Let us open a web socket
        ws = new WebSocket("ws://localhost:9001/votaciones");

        ws.onopen = conectar;
        ws.onmessage = mensajes;

    } else {
        alert("Su navegador no soporta WebSocket");
    }
}

document.addEventListener('DOMContentLoaded', function() {
    crearWS()
})