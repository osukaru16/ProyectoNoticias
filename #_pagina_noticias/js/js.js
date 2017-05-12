

//window.onload = function(){}













// cargar json
function cargaJ1(){

$.getJSON( "json/json1.json", function( jsonObject ) {
  //en aquest punt l'objecte jsonObject correspon al fitxer
  pintar( jsonObject );
});

function pintar(json){
 $.each( json, function( i, empleado ) {
  $("#out").append( "<li id='" + i + "'>" + empleado.firstName+ " " + empleado.lastName + "</li>" );
 });
}

}










function masCarga(){
	alert("Miau");

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