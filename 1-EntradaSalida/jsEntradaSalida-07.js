/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var num_1 = parseInt(txtIdNumeroUno.value);
	var num_2 = parseInt(txtIdNumeroDos.value);
	var resultado = num_1 + num_2;
	alert(`La suma es ${resultado}`);	
}

function restar()
{
	var num_1 = parseInt(txtIdNumeroUno.value);
	var num_2 = parseInt(txtIdNumeroDos.value);
	var resultado = num_1 - num_2;
	alert(`La resta es ${resultado}`);
}

function multiplicar()
{ 
	var num_1 = parseInt(txtIdNumeroUno.value);
	var num_2 = parseInt(txtIdNumeroDos.value);
	var resultado = num_1 * num_2;
	alert(`La maultiplicación es ${resultado}`);
}

function dividir()
{
	var num_1 = parseInt(txtIdNumeroUno.value);
	var num_2 = parseInt(txtIdNumeroDos.value);
	var resultado = num_1 / num_2;
	alert(`La division es ${resultado}`);
}

