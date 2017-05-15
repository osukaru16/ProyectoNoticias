
var contador;
var posicion;
var desplegar;



window.onload = function(){



	contador=4;
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
$("#nuevoContenido").append("<div id='div_"+key+"' class='col-sm-5'> <div id='noticia3"+contador+"' class='col-sm-8' ><div class='thumbnail'>");


  $("#nuevoContenido").append( "<p id='" + key+ "'>" + val.Titulo+"</p>" );
  // posicion++;



$("#nuevoContenido").append("</div></div></div>");


   if(key == 11){desplegar=false;}

 });


}

}

}




/*
function posicionar(numero){
	if(numero%2 ==0){
		$("#nuevoContenido").append("<div id='div_izquierda"+contador+"' class='col-sm-5'>");
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