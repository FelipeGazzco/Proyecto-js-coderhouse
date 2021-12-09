if (localStorage.getItem("arrayGuardado2") === null) {
    console.log("Almacenaje vacio");
}else{
    array1 = JSON.parse(localStorage.getItem("arrayGuardado"));
    array2 = JSON.parse(localStorage.getItem("arrayGuardado2"));
    for (const Personaje of array1) {
        $(".listaColeccion").append(`<li><h3> ${Personaje.nombre}</h3>
                  <p> Origen: ${Personaje.origen}</p>
                  <p> Ocupacion: ${Personaje.ocupacion}</p></li>`);
    }
    for (const Item of array2) {
        $(".listaColeccion").append(`<li><h3> ${Item.nombre}</h3>
                  <p>  Origen: ${Item.origen}</p>
                  <p> Uso: ${Item.uso}</p></li>`);
    }
}