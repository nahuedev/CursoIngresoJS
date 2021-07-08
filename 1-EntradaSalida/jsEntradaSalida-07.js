/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var num_1 = parseInt(document.getElementById('txtIdNumeroUno').value);
	var num_2 = parseInt(document.getElementById('txtIdNumeroDos').value);
	var resultado = num_1 + num_2;
	alert(`La suma es ${resultado}`);	
}

function restar()
{
	let num_1 = parseInt(document.getElementById('txtIdNumeroUno').value);
	let num_2 = parseInt(document.getElementById('txtIdNumeroDos').value);
	let resultado = num_1 - num_2;
	alert(`La resta es ${resultado}`);
}

function multiplicar()
{ 
	let num_1 = parseInt(document.getElementById('txtIdNumeroUno').value);
	let num_2 = parseInt(document.getElementById('txtIdNumeroDos').value);
	let resultado = num_1 * num_2;
	alert(`La maultiplicación es ${resultado}`);
}

function dividir()
{
	let num_1 = parseInt(document.getElementById('txtIdNumeroUno').value);
	let num_2 = parseInt(document.getElementById('txtIdNumeroDos').value);
	let resultado = num_1 / num_2;
	alert(`La division es ${resultado}`);
}

