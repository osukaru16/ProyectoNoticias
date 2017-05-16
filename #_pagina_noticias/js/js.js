
var contador;
var posicion;
var desplegar;



window.onload = function(){



	contador=1;
	posicion=5;
	desplegar=true;
}













// cargar json
function cargaJ1(){

if(desplegar){
$.getJSON( "json/json1v2.json", function( jsonObject ) {
  //en aquest punt l'objecte jsonObject correspon al fitxer
  pintar( jsonObject );
});

function pintar(json){
	$.each( json, function( key, val ) {


//$("#nuevoContenido").append("<div id='div_pos'"+posicion+" class='col-sm-5'></div>");
$("#nuevoContenido").append("<div id='box_"+posicion+"' class='col-sm-5'></div>");
$("#box_"+posicion).append("<div id='noticia"+posicion+"' class='col-sm-8'></div>");
$("#noticia"+posicion).append("<div id='thumbnail"+posicion+"' class='thumbnail'></div>");
$("#thumbnail"+posicion).append("<img src='"+val.Imagen+"' alt='noticia"+posicion+"' /> ");
$("#thumbnail"+posicion).append("<p id='fecha"+posicion+ "'>" + val.Fecha+"</p>");
$("#thumbnail"+posicion).append("<p id='titulo"+posicion+ "'> <strong>"+ val.Titulo+"</strong></p>");
$("#thumbnail"+posicion).append("<p id='descripcion"+posicion+ "'>" + val.Descipcion+"</p>");
$("#thumbnail"+posicion).append("<button class='btn' data-toggle='modal' data-target='#myModal' onclick='cargaNoticia("+posicion+");'>+</button>");



 
  posicion++;



   if(key == 11){
   	desplegar=false;

$("#contenedor_boton_carga").css("display","none");


$("#pie_principal").css("display","block");





   }

 });


}

}

}




/*
function posicionar(numero){
	if(numero%2 ==0){
		$("#nuevoContenido").append("<div id='div_izquierda2' class='col-sm-5'>");
	}
	else{

	}
}

*/






function masCarga(){
	//alert("Miau");

	cargaJ1();

	//$(#nuevoContenido).text("Miau");
}

























$(document).ready(function() {


		var win = $(window);

	// Each time the user scrolls
		win.scroll(function() {
		// End of the document reached?
			if ($(document).height() - win.height() == win.scrollTop()) {
				masCarga();
			}
		});
	});





/*

	$(document).ready(function() {
		var win = $(window);

	// Each time the user scrolls
		win.scroll(function() {
		// End of the document reached?
			if ($(document).height() - win.height() == win.scrollTop()) {
				$('#loading').show();

			$.ajax({
				url: 'get-post.php',
				dataType: 'html',
				success: function(html) {
					$('#posts').append(html);
					$('#loading').hide();*
				}
			});
			}
		});
	});
*/























function cargaNoticia(posicion){

alert("Cargar noticia "+posicion);


/*
$.post("noticias/noticias_extra.html",
{
          numero : posicion,
          
        }
        )


window.location.href = "noticias/noticias_extra.html";
*/







}