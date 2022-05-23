// JS - uf_1306_PROJECTE FLETNIX


var url_pelis="http://localhost/UF_1306_PROVES_FUNCIONALITAT/projecte_fletnix/pellicules/php/pellicules_list.php"
$.getJSON(url_pelis, function(pelis){         // crida al fitxer JSON
	console.log(pelis);
	
//	for (n=0; n<pelis.length; n++) {
	for (n=0; n<12; n++) {
		//simplifiquem variables
		var titol = pelis[n]["titol"];
        var director = pelis[n]["director"];
        var any = pelis[n]["any"];
        var pais = pelis[n]["pais"];
        var cover = pelis[n]["image"];
        var puntuacio = pelis[n]["puntuacio"];
        var estels = "";
	
        if (puntuacio == 0) {
          var estels = "<img src='img/stars/star_off.png'><img src='img/stars/star_off.png'><img src='img/stars/star_off.png'><img src='img/stars/star_off.png'><img src='img/stars/star_off.png'>";

        } else if (puntuacio == 1) {
          var estels = "<img src='img/stars/star_half.png'><img src='img/stars/star_off.png'><img src='img/stars/star_off.png'><img src='img/stars/star_off.png'><img src='img/stars/star_off.png'>";

        } else if (puntuacio == 2) {
          var estels = "<img src='img/stars/star_on.png'><img src='img/stars/star_off.png'><img src='img/stars/star_off.png'><img src='img/stars/star_off.png'><img src='img/stars/star_off.png'>";

        } else if (puntuacio == 3) {
          var estels = "<img src='img/stars/star_on.png'><img src='img/stars/star_half.png'><img src='img/stars/star_off.png'><img src='img/stars/star_off.png'><img src='img/stars/star_off.png'>";

        } else if (puntuacio == 4) {
          var estels = "<img src='img/stars/star_on.png'><img src='img/stars/star_on.png'><img src='img/stars/star_off.png'><img src='img/stars/star_off.png'><img src='img/stars/star_off.png'>";

        } else if (puntuacio == 5) {
          var estels = "<img src='img/stars/star_on.png'><img src='img/stars/star_on.png'><img src='img/stars/star_half.png'><img src='img/stars/star_off.png'><img src='img/stars/star_off.png'>";

        } else if (puntuacio == 6) {
          var estels = "<img src='img/stars/star_on.png'><img src='img/stars/star_on.png'><img src='img/stars/star_on.png'><img src='img/stars/star_off.png'><img src='img/stars/star_off.png'>";

        } else if (puntuacio == 7) {
          var estels = "<img src='img/stars/star_on.png'><img src='img/stars/star_on.png'><img src='img/stars/star_on.png'><img src='img/stars/star_half.png'><img src='img/stars/star_off.png'>";

        } else if (puntuacio == 8) {
          var estels = "<img src='img/stars/star_on.png'><img src='img/stars/star_on.png'><img src='img/stars/star_on.png'><img src='img/stars/star_on.png'><img src='img/stars/star_off.png'>";

        } else {
          var estels = "<img src='img/stars/star_on.png'><img src='img/stars/star_on.png'><img src='img/stars/star_on.png'><img src='img/stars/star_on.png'><img src='img/stars/star_on.png'>";
        }


		
		
		document.getElementById("fitxer_jason").innerHTML +=                     // aquí escriu al html
		"<div>"+
			"<h5>"+titol+"</h5>"+
			
			"<img src=http://localhost/UF_1306_PROVES_FUNCIONALITAT/projecte_fletnix/pellicules/img/covers/"+pelis[n]["image"]+".jpg>"+
	
			"<p class='dire'>" +pelis[n]["director"]+" - "+pelis[n]["any"]+"</p>"+"<p>"+pelis[n]["pais"]+"</p>"+
		    "<a target=_blank href='https://www.google.cat/search?q="+titol+" "+director+"'>+ info</a>"+       //obre en una pestanya nova del enllaç
			
			"<div class='estels'>" + estels + "</div>" +
     	"</div>";
	} 		
  
	
});

