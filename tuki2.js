if (localStorage.getItem("arrayGuardado") === null) {
    console.log("Almacenaje vacio");
}else{
    array1 = JSON.parse(localStorage.getItem("arrayGuardado"));
    for (const Personaje of array1) {
        $(".listaColeccion").append(`<li><h3> ${Personaje.nombre}</h3>
                  <p> Origen: ${Personaje.origen}</p>
                  <p> Ocupacion: ${Personaje.ocupacion}</p></li>`);
    }
}

if (localStorage.getItem("arrayGuardado2") === null) {
    console.log("Almacenaje vacio");
}else{
    array2 = JSON.parse(localStorage.getItem("arrayGuardado2"));
    for (const Item of array2) {
        $(".listaColeccion2").append(`<li><h3> ${Item.nombre}</h3>
                  <p>  Origen: ${Item.origen}</p>
                  <p> Uso: ${Item.uso}</p></li>`);
    }
}

let boton2 = document.getElementById("intento1");
boton2.onclick = () => {
    $(".navigator").fadeIn(setTimeout(function(){$(".navigator").fadeOut()}, 5000));
    $("#intento1").hide(setTimeout(function(){$("#intento1").fadeIn()}, 5300));
}

