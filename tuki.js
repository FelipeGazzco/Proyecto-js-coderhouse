let array1 = [];
let array2 = [];

class Personaje{
    constructor(nombre, origen, ocupacion, costo){
        this.nombre = nombre;
        this.origen = origen;
        this.ocupacion = ocupacion;
        this.costo = costo
    }
}

class Item{
    constructor(nombre2, origen2, uso, costo2){
        this.nombre = nombre2
        this.origen = origen2
        this.uso = uso
        this.costo = costo2
    }
}

let boton = document.getElementById("terminarPersonaje");
boton.onclick = () => {
    let uno = document.getElementById("nombre").value;
    let dos = document.getElementById("origen").value;
    let tres = document.getElementById("ocupacion").value;
    let cuatro = document.getElementById("costo").value;
    if (localStorage.getItem("arrayGuardado") === null) {
        console.log("Almacenaje vacio");
    }else{
        array1 = JSON.parse(localStorage.getItem("arrayGuardado"));
        console.log("+1");
    }
    array1.push(new Personaje(uno, dos, tres, cuatro));
    localStorage.setItem("arrayGuardado", JSON.stringify(array1));
    console.log(array1);
    document.location.reload()
};

let boton1 = document.getElementById("terminarItem");
boton1.onclick = () => {
    let uno = document.getElementById("nombre2").value;
    let dos = document.getElementById("origen2").value;
    let tres = document.getElementById("uso").value;
    let cuatro = document.getElementById("costo2").value;
    if (localStorage.getItem("arrayGuardado2") === null) {
        console.log("Almacenaje vacio");
    }else{
        array2 = JSON.parse(localStorage.getItem("arrayGuardado2"));
        console.log("+1");
    }
    array2.push(new Item(uno, dos, tres, cuatro));
    localStorage.setItem("arrayGuardado2", JSON.stringify(array2));
    console.log(array2);
    document.location.reload()
};

$("#intento1").click(function() {

    $("#intento1").fadeOut("slow", function() {
   
     $(".navigator").fadeIn("slow");
   
    });
   
   })