class Personaje{
    constructor(nombre, archivo, origen, ocupacion, costo){
        this.nombre = nombre;
        this.archivo = archivo;
        this.origen = origen;
        this.ocupacion = ocupacion;
        this.costo = costo
    }
}

class ID{
    constructor(id){
        this.id = id;
    }
}

class Item{
    constructor(nombre2, archivo2, origen2, uso, costo2){
        this.nombre = nombre2;
        this.archivo = archivo2;
        this.origen = origen2;
        this.uso = uso;
        this.costo = costo2;
    }
}

let tienda0 = {nombre: "Rick", archivo: "https://rickandmortyapi.com/api/character/avatar/1.jpeg", origen: "Tierra, C 137", ocupacion: "Cientifico, Criminal, Genio", precio: 10};
let tienda1 = {nombre:"Julio Cesar", archivo:"https://canalhistoria.es/wp-content/uploads/2019/02/julio-cesar.jpg", origen:"Italia", ocupacion:"Emperador, Dictador, Militar", precio:3};
let tienda2 = {nombre:"Big Chungus", archivo:"../221d9dea5bed3ecd731606df30f82ea3.jpg", origen:"?", ocupacion:"Dios, Protector, Justiciero", precio:800};
let tienda3 = {nombre:"Asterix", archivo:"https://www.asterix.com/illus/asterix-de-a-a-z/les-personnages/perso/g09b.gif", origen:"Galia, Francia", ocupacion:"Guerrero", precio:5};
let tienda4 = {nombre:"Thresh", archivo:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Thresh_0.jpg", origen:"Islas de las sombras", ocupacion:"Guardian, Soporte", precio:4.8};
let tienda5 = {nombre:"Spiderman", archivo:"https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/hc_1440x810/public/media/image/2020/10/marvels-spider-man-remastered-2109699.jpg?h=ddc58dd3&itok=qjT-2jMm", origen:"Nueva York", ocupacion:"Heroe, Fotografo", precio:2.5};
let tienda6 = {nombre:"Shou Tucker", archivo:"https://static1.cbrimages.com/wordpress/wp-content/uploads/2019/11/Shou-Tucker.jpg?q=50&fit=crop&w=740&h=370&dpr=1.5", origen:"Amestris", ocupacion:"Alquimista, Criminal", precio:0};
let tienda7 = {nombre:"Connor Kenway, Ratonhnhaké:ton", archivo:"https://pm1.narvii.com/6601/9b5c56ebd508f350ab601fd43af940cf954c925c_128.jpg", origen:"Mohawk Vallet, Estados Unidos", ocupacion:"Asesino, Cazador, Rebelde", precio:5};

if (localStorage.getItem("arrayTiendal") === null){
    localStorage.setItem("arrayTiendal", [tienda0, tienda1, tienda2, tienda3, tienda4, tienda5, tienda6, tienda7]);
}else{
    let arrayTienda = localStorage.getItem("arrayTiendal")
    console.log("2");
}

let compra1 = document.getElementById("comprar1");
compra1.onclick = () => {
    if (localStorage.getItem("plataGuardada") >= tienda0.precio) {
        let uno = tienda0.nombre;
        let dos = tienda0.archivo;
        let tres = tienda0.origen;
        let cuatro = tienda0.ocupacion;
        let cinco = tienda0.precio * 100;
        if (localStorage.getItem("arrayGuardado") === null) {
            console.log("Almacen vacio");  
            let array1 = [];
            array1.push(new Personaje(uno, dos, tres, cuatro, cinco));
            localStorage.setItem("arrayGuardado", JSON.stringify(array1));
            console.log(array1);  
        }else{
            array1 = JSON.parse(localStorage.getItem("arrayGuardado"));
            console.log("+1");
            array1.push(new Personaje(uno, dos, tres, cuatro, cinco));
            localStorage.setItem("arrayGuardado", JSON.stringify(array1));
            console.log(array1);
        }
        let platanueva = localStorage.getItem("plataGuardada") - 10;
        localStorage.setItem("plataGuardada", platanueva);
        if (localStorage.getItem("arrayID") === null) {
            let arrayidnoalmacen = [];
            let id = "rick"
            arrayidnoalmacen.push(new ID(id));
            localStorage.setItem("arrayID", arrayidnoalmacen);
        } else{
            let arrayidnoalmacen = localStorage.getItem("arrayID");
            let id = "rick"
            arrayidnoalmacen.push(new ID(id));
            localStorage.setItem("arrayID", arrayidnoalmacen);
        }
    }else{
        alert("Imposible");
    }
}

let compra2 = document.getElementById("comprar2");
compra2.onclick = () => {
    if (localStorage.getItem("plataGuardada") >= tienda1.precio) {
        let uno = tienda1.nombre;
        let dos = tienda1.archivo;
        let tres = tienda1.origen;
        let cuatro = tienda1.ocupacion;
        let cinco = tienda1.precio * 100;
        if (localStorage.getItem("arrayGuardado") === null) {
            console.log("Almacen vacio"); 
            let array1 = [];   
            array1.push(new Personaje(uno, dos, tres, cuatro, cinco));
            localStorage.setItem("arrayGuardado", JSON.stringify(array1));
            console.log(array1);
        }else{
            array1 = JSON.parse(localStorage.getItem("arrayGuardado"));
            console.log("+1");
            array1.push(new Personaje(uno, dos, tres, cuatro, cinco));
            localStorage.setItem("arrayGuardado", JSON.stringify(array1));
            console.log(array1);
        }
        let platanueva = localStorage.getItem("plataGuardada") - 3;
        localStorage.setItem("plataGuardada", platanueva);
        if (localStorage.getItem("arrayID") === null) {
            let arrayidnoalmacen = [];
            let id = "julio"
            arrayidnoalmacen.push(new ID(id));
            localStorage.setItem("arrayID", arrayidnoalmacen);
        } else{
            let arrayidnoalmacen = localStorage.getItem("arrayID");
            let id = "julio"
            arrayidnoalmacen.push(new ID(id));
            localStorage.setItem("arrayID", arrayidnoalmacen);
        }
    }else{
        alert("Imposible");
    }
}

let compra3 = document.getElementById("comprar3");
compra3.onclick = () => {
    if (localStorage.getItem("plataGuardada") >= tienda2.precio) {
        let uno = tienda2.nombre;
        let dos = tienda2.archivo;
        let tres = tienda2.origen;
        let cuatro = tienda2.ocupacion;
        let cinco = tienda2.precio * 100;
        if (localStorage.getItem("arrayGuardado") === null) {
            console.log("Almacen vacio"); 
            let array1 = [];  
            array1.push(new Personaje(uno, dos, tres, cuatro, cinco));
            localStorage.setItem("arrayGuardado", JSON.stringify(array1));
            console.log(array1);
        }else{
            array1 = JSON.parse(localStorage.getItem("arrayGuardado"));
            console.log("+1");
            array1.push(new Personaje(uno, dos, tres, cuatro, cinco));
            localStorage.setItem("arrayGuardado", JSON.stringify(array1));
            console.log(array1);
        }
        let platanueva = localStorage.getItem("plataGuardada") - 800;
        localStorage.setItem("plataGuardada", platanueva);
        if (localStorage.getItem("arrayID") === null) {
            let arrayidnoalmacen = [];
            let id = "chungus"
            arrayidnoalmacen.push(new ID(id));
            localStorage.setItem("arrayID", arrayidnoalmacen);
        } else{
            let arrayidnoalmacen = localStorage.getItem("arrayID");
            let id = "chungus"
            arrayidnoalmacen.push(new ID(id));
            localStorage.setItem("arrayID", arrayidnoalmacen);
        }
    }else{
        alert("Imposible");
    }
}

let compra4 = document.getElementById("comprar4");
compra4.onclick = () => {
    if (localStorage.getItem("plataGuardada") >= tienda3.precio) {
        let uno = tienda3.nombre;
        let dos = tienda3.archivo;
        let tres = tienda3.origen;
        let cuatro = tienda3.ocupacion;
        let cinco = tienda3.precio * 100;
        if (localStorage.getItem("arrayGuardado") === null) {
            console.log("Almacen vacio");
            let array1 = [];
            array1.push(new Personaje(uno, dos, tres, cuatro, cinco));
            localStorage.setItem("arrayGuardado", JSON.stringify(array1));
            console.log(array1);
        }else{
            array1 = JSON.parse(localStorage.getItem("arrayGuardado"));
            console.log("+1");
            array1.push(new Personaje(uno, dos, tres, cuatro, cinco));
            localStorage.setItem("arrayGuardado", JSON.stringify(array1));
            console.log(array1);
        }
        let platanueva = localStorage.getItem("plataGuardada") - 5;
        localStorage.setItem("plataGuardada", platanueva);
        if (localStorage.getItem("arrayID") === null) {
            let arrayidnoalmacen = [];
            let id = "asterix"
            arrayidnoalmacen.push(new ID(id));
            localStorage.setItem("arrayID", arrayidnoalmacen);
        } else{
            let arrayidnoalmacen = localStorage.getItem("arrayID");
            let id = "asterix"
            arrayidnoalmacen.push(new ID(id));
            localStorage.setItem("arrayID", arrayidnoalmacen);
        }
    }else{
        alert("Imposible");
    }
}

let compra5 = document.getElementById("comprar5");
compra5.onclick = () => {
    if (localStorage.getItem("plataGuardada") >= tienda4.precio) {
        let uno = tienda4.nombre;
        let dos = tienda4.archivo;
        let tres = tienda4.origen;
        let cuatro = tienda4.ocupacion;
        let cinco = tienda4.precio * 100;
        if (localStorage.getItem("arrayGuardado") === null) {
            console.log("Almacen vacio");   
            let array1 = [];
            array1.push(new Personaje(uno, dos, tres, cuatro, cinco));
            localStorage.setItem("arrayGuardado", JSON.stringify(array1));
            console.log(array1);
        }else{
            array1 = JSON.parse(localStorage.getItem("arrayGuardado"));
            console.log("+1");
            array1.push(new Personaje(uno, dos, tres, cuatro, cinco));
            localStorage.setItem("arrayGuardado", JSON.stringify(array1));
            console.log(array1);
        }
        let platanueva = localStorage.getItem("plataGuardada") - 4.8;
        localStorage.setItem("plataGuardada", platanueva);
        if (localStorage.getItem("arrayID") === null) {
            let arrayidnoalmacen = [];
            let id = "leagueoflegends"
            arrayidnoalmacen.push(new ID(id));
            localStorage.setItem("arrayID", arrayidnoalmacen);
        } else{
            let arrayidnoalmacen = localStorage.getItem("arrayID");
            let id = "leagueoflegends"
            arrayidnoalmacen.push(new ID(id));
            localStorage.setItem("arrayID", arrayidnoalmacen);
        }
    }else{
        alert("Imposible");
    }
}

let compra6 = document.getElementById("comprar6");
compra6.onclick = () => {
    if (localStorage.getItem("plataGuardada") >= tienda5.precio) {
        let uno = tienda5.nombre;
        let dos = tienda5.archivo;
        let tres = tienda5.origen;
        let cuatro = tienda5.ocupacion;
        let cinco = tienda5.precio * 100;
        if (localStorage.getItem("arrayGuardado") === null) {
            console.log("Almacen vacio");   
            let array1 = [];
            array1.push(new Personaje(uno, dos, tres, cuatro, cinco));
            localStorage.setItem("arrayGuardado", JSON.stringify(array1));
            console.log(array1);
        }else{
            array1 = JSON.parse(localStorage.getItem("arrayGuardado"));
            console.log("+1");
            array1.push(new Personaje(uno, dos, tres, cuatro, cinco));
            localStorage.setItem("arrayGuardado", JSON.stringify(array1));
            console.log(array1);
        }
        let platanueva = localStorage.getItem("plataGuardada") - 2.5;
        localStorage.setItem("plataGuardada", platanueva);
        if (localStorage.getItem("arrayID") === null) {
            let arrayidnoalmacen = [];
            let id = "peteparker"
            arrayidnoalmacen.push(new ID(id));
            localStorage.setItem("arrayID", arrayidnoalmacen);
        } else{
            let arrayidnoalmacen = localStorage.getItem("arrayID");
            let id = "peteparker"
            arrayidnoalmacen.push(new ID(id));
            localStorage.setItem("arrayID", arrayidnoalmacen);
        }
    }else{
        alert("Imposible");
    }
}

let compra7 = document.getElementById("comprar7");
compra7.onclick = () => {
    if (localStorage.getItem("plataGuardada") >= tienda6.precio) {
        let uno = tienda6.nombre;
        let dos = tienda6.archivo;
        let tres = tienda6.origen;
        let cuatro = tienda6.ocupacion;
        let cinco = tienda6.precio * 100;
        if (localStorage.getItem("arrayGuardado") === null) {
            console.log("Almacen vacio");
            let array1 = [];     
            array1.push(new Personaje(uno, dos, tres, cuatro, cinco));
            localStorage.setItem("arrayGuardado", JSON.stringify(array1));
            console.log(array1);
        }else{
            array1 = JSON.parse(localStorage.getItem("arrayGuardado"));
            console.log("+1");
            array1.push(new Personaje(uno, dos, tres, cuatro, cinco));
            localStorage.setItem("arrayGuardado", JSON.stringify(array1));
            console.log(array1);
        }
        let platanueva = localStorage.getItem("plataGuardada") - 0;
        localStorage.setItem("plataGuardada", platanueva);
        if (localStorage.getItem("arrayID") === null) {
            let arrayidnoalmacen = [];
            let id = "fullmetal"
            arrayidnoalmacen.push(new ID(id));
            localStorage.setItem("arrayID", arrayidnoalmacen);
        } else{
            let arrayidnoalmacen = localStorage.getItem("arrayID");
            let id = "fullmetal"
            arrayidnoalmacen.push(new ID(id));
            localStorage.setItem("arrayID", arrayidnoalmacen);
        }
    }else{
        alert("Imposible");
    }
}

let compra8 = document.getElementById("comprar8");
compra8.onclick = () => {
    if (localStorage.getItem("plataGuardada") >= tienda7.precio) {
        let uno = tienda7.nombre;
        let dos = tienda7.archivo;
        let tres = tienda7.origen;
        let cuatro = tienda7.ocupacion;
        let cinco = tienda7.precio * 100;
        if (localStorage.getItem("arrayGuardado") === null) {
            console.log("Almacen vacio"); 
            let array1 = [];  
            array1.push(new Personaje(uno, dos, tres, cuatro, cinco));
            localStorage.setItem("arrayGuardado", JSON.stringify(array1));
            console.log(array1);  
        }else{
            array1 = JSON.parse(localStorage.getItem("arrayGuardado"));
            console.log("+1");
            array1.push(new Personaje(uno, dos, tres, cuatro, cinco));
            localStorage.setItem("arrayGuardado", JSON.stringify(array1));
            console.log(array1);
        }
        let platanueva = localStorage.getItem("plataGuardada") -5;
        localStorage.setItem("plataGuardada", platanueva);
        if (localStorage.getItem("arrayID") === null) {
            let arrayidnoalmacen = [];
            let id = "assasin"
            arrayidnoalmacen.push(new ID(id));
            localStorage.setItem("arrayID", arrayidnoalmacen);
        } else{
            let arrayidnoalmacen = localStorage.getItem("arrayID");
            let id = "assasin"
            arrayidnoalmacen.push(new ID(id));
            localStorage.setItem("arrayID", arrayidnoalmacen);
        }
    }else{
        alert("Imposible");
    }
}