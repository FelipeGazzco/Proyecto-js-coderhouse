
const URL_PERSONAJES = "https://rickandmortyapi.com/api/character";

$.get(URL_PERSONAJES, (data, status) => {

    let resultados = data.results;
    for(const personaje of resultados) {
        $(".tiendaDiv").append(`
            <div>
                <p>Nombre: ${personaje.name}</p>
                <img src="${personaje.image}" width="100px">
                <p>Clase: Personaje </p>
                <button class="consume">Comprar (250)</button>
                <script>
                function consume(){
                    let abcd = localStorage.getItem("plataGuardada");
                    if (abcd >= 2.5) {
                        let abcd12 = abcd -2.5;
                        localStorage.setItem("plataGuardada", abcd12);
                    }else{
                        alert("Imposible")
                    }
                    document.ocation.reload();
                }
            </script>
            </div>
        `)
    }
});

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
                    <p>Clase: Personaje </p>
                    <button class="consume2" onclick="consume2()">Comprar (350)</button>
                    <script>
                        function consume2(){
                            let abcd2 = localStorage.getItem("plataGuardada");
                            if (abcd2 >= 3.5) {
                                let abcd22 = abcd2 -3.5;
                                localStorage.setItem("plataGuardada", abcd22);
                            }else{
                                alert("Imposible")
                            }
                            document.ocation.reload();
                        }
                    </script>
                </div>
            `)
        });
    }
});

function consume2() {
    alert('Se ha dado clic al botón!');
    let abcd2 = localStorage.getItem("plataGuardada");
    if (abcd2 >= 3.5) {
        let abcd22 = abcd2 -3.5;
        localStorage.setItem("plataGuardada", abcd22);
    }else{
        alert("Imposible")
    }
    documen.location.reload();
}

let plata3 = localStorage.getItem("plataGuardada");

$("#statik").append(`<div><h3>Plata a disposicion</h3>
                  <p>Actual: ${plata3 * 100}</p></div>`);

$("#intento1").click(function() {
    $("#intento1").fadeOut("slow", function() {
     $(".navigator").fadeIn("slow");   
    });  
})