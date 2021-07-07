/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var num_1 = parseInt(txtIdImporte.value);
	var aumento = 0.75;
	var resultado = num_1 * aumento;
	txtIdResultado.value=parseInt(resultado);
	//alert("ok");
}
