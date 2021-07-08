/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{ 
	let num_1 = parseInt(document.getElementById('txtIdNumeroDividendo').value);
	let num_2 = parseInt(document.getElementById('txtIdNumeroDivisor').value);
	let resto = num_1 % num_2;
	alert(`El resto es ${resto}`);
	
}
