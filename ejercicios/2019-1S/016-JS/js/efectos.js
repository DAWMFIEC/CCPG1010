/* Selecciona el elemento con el id close */
var close = $('#close')

/* Selecciona el elemento con el id banner */
var banner = $('#banner')

/* Agrega el callback al evento click al elemento con el id close */
/* Desaparece el elemento con el id banner. Prueba los efectos hide, fadeOut y toggle */

close.on('click',function cerrar(){
	banner.hide();
});