let plata3 = localStorage.getItem("plataGuardada");

$("#statik").append(`<div><h3>Plata a disposicion</h3>
                  <p>Actual: ${plata3 * 100}</p></div>`);

$("#intento1").click(function() {

    $("#intento1").fadeOut("slow", function() {
   
     $(".navigator").fadeIn("slow");
   
    });
   
})

const URL_PERSONAJES = "https://rickandmortyapi.com/api/character";

$.get(URL_PERSONAJES, (data, status) => {

    let resultados = data.results;

    let count = 0;
    for(const personaje of resultados) {
        count++;
        $(".tiendaDiv").append(`
            <div>
                <p>Nombre: ${personaje.name}</p>
                <img src="${personaje.image}" width="100px">

            </div>
        `)
    }

})

const URL_PERSONAJES2 = "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20"

$.get(URL_PERSONAJES2, (data, status) => {

    let resultados = data.results;

    for(const pokemon of resultados) {
        $.get(pokemon.url, (data_poke, status) => {
            let img_main = data_poke.sprites.other["official-artwork"].front_default
            $(".tiendaDiv2").append(`
                <div>
                    <p>Nombre: ${pokemon.name}</p>
                    <img src="${img_main}" width="100px">
                </div>
            `)
        })


    }

})