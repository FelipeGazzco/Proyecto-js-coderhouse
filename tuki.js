let array1 = [];

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
        console.log(array1);
    }
    array1.push(new Personaje(uno, dos, tres));
    localStorage.setItem("arrayGuardado", JSON.stringify(array1));
    console.log(array1);
    /*array2.push(new Item(uno, cuatro, cinco));
    //listaItems.push(new Item(uno, cuatro, cinco));)
    guardarProd("array2", JSON.stringify(array2));
    let almacenados = JSON.parse(localStorage.getItem("array2"));
    for (const Item of almacenados) {
        let contenedor = document.createElement("div");
        contenedor.innerHTML = `<h3>${Item.nombre}</h3>
                                <p>${Item.origen}</p>
                                <p>${Item.uso}</p>`;
        document.body.appendChild(contenedor);
    }
    console.log(array2);*/
};

let boton1 = document.getElementById("terminarItem");
boton1.onclick = () => {
    let uno = document.getElementById("nombre2").value;
    let dos = document.getElementById("origen2").value;
    let tres = document.getElementById("uso").value;
    if (localStorage.getItem("arrayGuardado") === null) {
        console.log("Almacenaje vacio");
    }else{
        array1 = JSON.parse(localStorage.getItem("arrayGuardado"));
        console.log(array1);
    }
    array1.push(new Item(uno, dos, tres));
    localStorage.setItem("arrayGuardado", JSON.stringify(array1));
    console.log(array1);
    /*let almacenados = JSON.parse(localStorage.getItem("array2"));
    for (const Item of almacenados) {
        let contenedor = document.createElement("div");
        contenedor.innerHTML = `<h3>${Item.nombre}</h3>
                                <p>${Item.origen}</p>
                                <p>${Item.uso}</p>`;
        document.body.appendChild(contenedor);
    }
    console.log(array2);*/
};

