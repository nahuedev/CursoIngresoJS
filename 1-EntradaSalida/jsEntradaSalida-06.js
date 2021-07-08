/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var num_1 = parseInt(document.getElementById('txtIdNumeroUno').value);
	var num_2 = parseInt(document.getElementById('txtIdNumeroDos').value);
	var suma = num_1 + num_2;
	alert(suma);
}

