/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	let dato = prompt()
	let nombre= document.getElementById('txtIdNombre');
		nombre.value= dato;
}

