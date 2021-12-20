let plata = localStorage.getItem("plataGuardada");

$("#statik").append(`<div><h3>Plata a disposicion</h3>
                  <p>Actual: ${plata}</p></div>`);






$("#intento1").click(function() {

    $("#intento1").fadeOut("slow", function() {
   
     $(".navigator").fadeIn("slow");
   
    });
   
})