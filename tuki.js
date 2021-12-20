let array1 = [];
let array2 = [];

class Personaje{
    constructor(nombre, archivo, origen, ocupacion, costo){
        this.nombre = nombre;
        this.archivo = archivo;
        this.origen = origen;
        this.ocupacion = ocupacion;
        this.costo = costo
    }
}

class Item{
    constructor(nombre2, archivo2, origen2, uso, costo2){
        this.nombre = nombre2
        this.archivo = archivo2
        this.origen = origen2
        this.uso = uso
        this.costo = costo2
    }
}

let boton = document.getElementById("terminarPersonaje");
boton.onclick = () => {
    let uno = document.getElementById("nombre").value;
    let dos = document.getElementById("archivo").value;
    let tres = document.getElementById("origen").value;
    let cuatro = document.getElementById("ocupacion").value;
    let cinco = document.getElementById("costo").value;
    if (localStorage.getItem("arrayGuardado") === null) {
        console.log("Almacenaje vacio");
    }else{
        array1 = JSON.parse(localStorage.getItem("arrayGuardado"));
        console.log("+1");
    }
    array1.push(new Personaje(uno, dos, tres, cuatro, cinco));
    localStorage.setItem("arrayGuardado", JSON.stringify(array1));
    console.log(array1);
    document.location.reload()
    if (localStorage.getItem("plataGuardada") === null) {
        let plata = 0
        plata++; 
        localStorage.setItem("plataGuardada", plata);
    }else{
        let plata = localStorage.getItem("plataGuardada");
        plata++;
        localStorage.setItem("plataGuardada", plata);
    }
};

let boton1 = document.getElementById("terminarItem");
boton1.onclick = () => {
    let uno = document.getElementById("nombre2").value;
    let dos = document.getElementById("archivo2").value;
    let tres = document.getElementById("origen2").value;
    let cuatro = document.getElementById("uso").value;
    let cinco = document.getElementById("costo2").value;
    if (localStorage.getItem("arrayGuardado2") === null) {
        console.log("Almacenaje vacio");
    }else{
        array2 = JSON.parse(localStorage.getItem("arrayGuardado2"));
        console.log("+1");
    }
    array2.push(new Item(uno, dos, tres, cuatro, cinco));
    localStorage.setItem("arrayGuardado2", JSON.stringify(array2));
    console.log(array2);
    document.location.reload()
    if (localStorage.getItem("plataGuardada") === null) {
        let plata = 0
        plata++; 
        localStorage.setItem("plataGuardada", plata);
    }else{
        let plata = localStorage.getItem("plataGuardada");
        plata++;
        localStorage.setItem("plataGuardada", plata);
    }
};

$("#intento1").click(function() {

    $("#intento1").fadeOut("slow", function() {
   
     $(".navigator").fadeIn("slow");
   
    });
   
})

let plata = localStorage.getItem("plataGuardada");
$("#statik").append(`<div><h3>Puntos a disposicion</h3>
                  <p>Actual: ${plata * 100}</p></div>`);