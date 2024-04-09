
// Crea la variable del lienzo
var canvas = new fabric.Canvas('myCanvas'); 
//Establece las posiciones iniciales para las imágenes de la pelota y el hoyo.
ball_y=0;
ball_x=0;
hole_y=400;
hole_x=800;

block_image_width = 5;
block_image_height = 5;

function load_img(){
	// escribe código para cargar la imagen del golf en el lienzo
	fabric.Image.fromURL("golf-h.png", function(img){
hole_obj = img ;
hole_obj = scaleToWidht(50);
hole_obj = scaleToHeight(50);
hole_obj = set({
	top:hole_y,
	left:hole_x
});
canvas.add(hole_obj)


	});
	new_image();
}

function new_image()

	{
		// escribe código para cargar la imagen del golf en el lienzo
		fabric.Image.fromURL("golf-h.png", function(img){
	ball_obj = img ;
	ball_obj = scaleToWidht(50);
	ball_obj = scaleToHeight(50);
	ball_obj = set({
		top:ball_y,
		left:ball_x
	});
	canvas.add(ball_obj)
	
	
		});	// escribe código para cargar la imagen de la pelota en el lienzo  
}
if((ball_x==hole_x)&&(ball_y==hole_y)){
	canvas.remove(ball_obj);
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);	
	/* Revisa las coordenadas de las imágenes de la pelota y el hoyo para finalizar el juego. 
	Y las coordenadas del id coordinates coinciden, entonces elimina la pelota.  
	muestra "¡FIN DEL JUEGO!" 
	y haz el borde del lienzo "rojo".*/
	document.getElementById("hd3").innerHTML="!METISTE LA PELOTA, BIEN¡";
	document.getElementById("myCanvas").style.borderColor="red";
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("arriba");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("abajo");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("izquierda");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("derecha");
		}}
	
	function up()
	{
	'38'	// Escribe código para mover la pelota hacia arriba
	}

	function down()
	{	
	'40'	 // Escribe código para mover la pelota hacia abajo.
	}

	function left()
	{
		if(ball_x >5)
		{
		'37'	// Escribe código para mover la pelota a la izquierda.
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
		'39'	// Escribe código para mover la pelota a la derecha.
		}
	}
	
}

