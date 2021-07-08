/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let num_1 = parseInt(document.getElementById('txtIdImporte').value);
	let idResultado=document.getElementById('txtIdResultado');
	let alicDescuento = 0.75;
	let resultado = num_1 * alicDescuento;
		idResultado.value= parseInt(resultado)

	}