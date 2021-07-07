/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var num_1 = parseInt(txtIdSueldo.value);
	var aumento = 1.1;
	var resultado = num_1 * aumento;
	txtIdResultado.value=parseInt(resultado);
	//alert("ok");
}
