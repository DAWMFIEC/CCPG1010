var ws;

/*
	Recibe el id, titulo y texto del anuncio a agregar al div#clasificados
*/

let plantilla = (id,titulo,texto) => {

	if($("#"+id).length > 0 )
		return false;

	let card = $('<div></div>').attr('class','card').attr('id',id);
	let cardBody = $('<div></div>').attr('class','card-body');

	let h5 = $('<h5></h5>').attr('class','card-title').text(titulo);
	let p = $('<p></p>').attr('class','card-text').text(texto);

	cardBody.append(h5).append(p);
	card.append(cardBody);

	$('#clasificados').append(card)
}


/*
	Establece conexión con el servidor de websockets
*/

let conectar = () => {
	
	console.log("Conectado")

	var msg = {type: "connect"};
    ws.send(JSON.stringify(msg));
}

/*
	Publicar un mensaje nuevo en el servidor de websockets
*/

let publicar = () => {

	var msg = {
        type: "update",
        titulo: $('#titulo').val(),
        texto: $('#texto').val()
    };

    ws.send(JSON.stringify(msg));
    
    $('#titulo').val('');
    $('#texto').val('');
}

/*
	Muestra los mensajes que envía el servidor de websockets
*/

let mensajes = (evento) => {

	let respuesta = jQuery.parseJSON(evento.data);

	for(let clasificado of respuesta){
		plantilla(clasificado["id"],clasificado["titulo"],clasificado["texto"]);
	}
}

/*
	Crea el web socket y establece la conexión con el servidor de websockets

*/

let crearWS = () => {
	if ("WebSocket" in window) {

        // Let us open a web socket
        ws = new WebSocket("ws://localhost:9001/entrada_cliente");

        ws.onopen = conectar;
        ws.onmessage = mensajes;

    } else {
        alert("Su navegador no soporta WebSocket");
    }
}

/*
	Al cargar la página inicia con la creación del web socket local
*/

$(window).ready(() => {
	crearWS();

	$('#publicar').click(function() {
        publicar();
    })

});