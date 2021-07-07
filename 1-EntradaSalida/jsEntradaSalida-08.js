/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{ 
	var num_1 = parseInt(txtIdNumeroDividendo.value);
	var num_2 = parseInt(txtIdNumeroDivisor.value);
	var resultado = num_1 / num_2;
	var resto = num_1 % num_2;
	alert(`El resto es ${resto}`);
	
}
