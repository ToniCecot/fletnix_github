$.getJSON("php/pellicules_list.php", function (pelis) {
    console.log(pelis);

    for (n = 0; n < pelis.length; n++)  {
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



        document.getElementById("llista_pelis").innerHTML +=
          "<article>"+
            "<h2>"+titol+"</h2>" +
            "<img class='cover' src='img/covers/" + cover  + ".jpg'></div>" +
            "<div class='descripcio'>" +
              "<p>" + "Director: " + director + "</p>" +
              "<p><span>" + "Any " + any + " - " + pais + "</span></p>" +
            "</div>" +
            "<div class='estels'>" + estels + "</div>" +
          "</article>";


    }

});
