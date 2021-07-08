/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let num_1 = parseInt(document.getElementById('txtIdSueldo').value);
	let idResultado=document.getElementById('txtIdResultado');
	let alicAumento = 1.1;
	let resultado = num_1 * alicAumento;
		idResultado.value=parseInt(resultado);

}
