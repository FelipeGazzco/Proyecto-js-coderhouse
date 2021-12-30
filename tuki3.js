const precios = ["500", "200000", "777", "400", "17000", "1200", "4400", "3000"];

const URL_PERSONAJES2 = "https://pokeapi.co/api/v2/pokemon?offset=8&limit=8"
$.get(URL_PERSONAJES2, (data, status) => {
    let resultados = data.results;
    for(const pokemon of resultados) {
        let random = Math.floor(Math.random() * precios.length);
        $.get(pokemon.url, (data_poke, status) => {
            let img_main = data_poke.sprites.other["official-artwork"].front_default
            $(".masvendido").append(`
                <div>
                    <p>Nombre: ${pokemon.name}</p>
                    <img src="${img_main}" width="100px">
                    <p>Clase: Personaje </p>
                    <p>Precio: ${(random, precios[random])}<p>
                </div>
            `)
        });
    }
});


let plata3 = localStorage.getItem("plataGuardada");

$("#statik").append(`<div><h3>Plata a disposicion</h3>
                  <p>Actual: ${plata3 * 100}</p></div>`);

$("#intento1").click(function() {
    $("#intento1").fadeOut("slow", function() {
     $(".navigator").fadeIn("slow");   
    });  
})

