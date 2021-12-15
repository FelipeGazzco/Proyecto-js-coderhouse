let array1 = [];
let array2 = [];

class Personaje{
    constructor(nombre, origen, ocupacion){
        this.nombre = nombre;
        this.origen = origen;
        this.ocupacion = ocupacion;
    }
}

class Item{
    constructor(nombre2, origen2, uso){
        this.nombre = nombre2
        this.origen = origen2
        this.uso = uso
    }
}

let boton = document.getElementById("terminarPersonaje");
boton.onclick = () => {
    let uno = document.getElementById("nombre").value;
    let dos = document.getElementById("origen").value;
    let tres = document.getElementById("ocupacion").value;
    if (localStorage.getItem("arrayGuardado") === null) {
        console.log("Almacenaje vacio");
    }else{
        array1 = JSON.parse(localStorage.getItem("arrayGuardado"));
        console.log("+1");
    }
    array1.push(new Personaje(uno, dos, tres));
    localStorage.setItem("arrayGuardado", JSON.stringify(array1));
    console.log(array1);
    document.location.reload()
};

let boton1 = document.getElementById("terminarItem");
boton1.onclick = () => {
    let uno = document.getElementById("nombre2").value;
    let dos = document.getElementById("origen2").value;
    let tres = document.getElementById("uso").value;
    if (localStorage.getItem("arrayGuardado2") === null) {
        console.log("Almacenaje vacio");
    }else{
        array2 = JSON.parse(localStorage.getItem("arrayGuardado2"));
        console.log("+1");
    }
    array2.push(new Item(uno, dos, tres));
    localStorage.setItem("arrayGuardado2", JSON.stringify(array2));
    console.log(array2);
    document.location.reload()
};

let boton2 = document.getElementById("intento1");
boton2.onclick = () => {
    $(".navigator").fadeIn(setTimeout(function(){$(".navigator").fadeOut()}, 4000));
    $("#intento1").hide(setTimeout(function(){$("#intento1").fadeIn()}, 4300));
}