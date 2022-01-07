class Personaje{
    constructor(nombre, archivo, origen, ocupacion, precio, key){
        this.nombre = nombre;
        this.archivo = archivo;
        this.origen = origen;
        this.ocupacion = ocupacion;
        this.precio = precio;
        this.key = key;
    }
}


let tienda0 = {nombre: "Rick", archivo: "https://rickandmortyapi.com/api/character/avatar/1.jpeg", origen: "Tierra, C 137", ocupacion: "Cientifico, Criminal, Genio", precio: 10, key:"a"};
let tienda1 = {nombre:"Julio Cesar", archivo:"https://canalhistoria.es/wp-content/uploads/2019/02/julio-cesar.jpg", origen:"Italia", ocupacion:"Emperador, Dictador, Militar", precio:3, key:"b"};
let tienda2 = {nombre:"Big Chungus", archivo:"../221d9dea5bed3ecd731606df30f82ea3.jpg", origen:"?", ocupacion:"Dios, Protector, Justiciero", precio:800,  key:"c"};
let tienda3 = {nombre:"Asterix", archivo:"https://www.asterix.com/illus/asterix-de-a-a-z/les-personnages/perso/g09b.gif", origen:"Galia, Francia", ocupacion:"Guerrero", precio:5, key:"d"};
let tienda4 = {nombre:"Thresh", archivo:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Thresh_0.jpg", origen:"Islas de las sombras", ocupacion:"Guardian, Soporte", precio:4.8, key:"e"};
let tienda5 = {nombre:"Spiderman", archivo:"https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/hc_1440x810/public/media/image/2020/10/marvels-spider-man-remastered-2109699.jpg?h=ddc58dd3&itok=qjT-2jMm", origen:"Nueva York", ocupacion:"Heroe, Fotografo", precio:2.5, key:"f"};
let tienda6 = {nombre:"Shou Tucker", archivo:"https://static1.cbrimages.com/wordpress/wp-content/uploads/2019/11/Shou-Tucker.jpg?q=50&fit=crop&w=740&h=370&dpr=1.5", origen:"Amestris", ocupacion:"Alquimista, Criminal", precio:0, key:"g"};
let tienda7 = {nombre:"Connor Kenway, Ratonhnhaké:ton", archivo:"https://pm1.narvii.com/6601/9b5c56ebd508f350ab601fd43af940cf954c925c_128.jpg", origen:"Mohawk Valley, Estados Unidos", ocupacion:"Asesino, Cazador, Rebelde", precio:5, key:"h"};

/*if (localStorage.getItem("arrayTiendal") === null){
    localStorage.setItem("arrayTiendal", [tienda0, tienda1, tienda2, tienda3, tienda4, tienda5, tienda6, tienda7]);
}else{
    let arrayTienda = localStorage.getItem("arrayTiendal")
    console.log("2");
}*/

arrayDef = [];

if(localStorage.getItem("chapadmalal") === null){
    arrayDef.push(new Personaje(tienda0.nombre, tienda0.archivo, tienda0.origen, tienda0.ocupacion, tienda0.precio, tienda0.key));
    arrayDef.push(new Personaje(tienda1.nombre, tienda1.archivo, tienda1.origen, tienda1.ocupacion, tienda1.precio, tienda1.key));
    arrayDef.push(new Personaje(tienda2.nombre, tienda2.archivo, tienda2.origen, tienda2.ocupacion, tienda2.precio, tienda2.key));
    arrayDef.push(new Personaje(tienda3.nombre, tienda3.archivo, tienda3.origen, tienda3.ocupacion, tienda3.precio, tienda3.key));
    arrayDef.push(new Personaje(tienda4.nombre, tienda4.archivo, tienda4.origen, tienda4.ocupacion, tienda4.precio, tienda4.key));
    arrayDef.push(new Personaje(tienda5.nombre, tienda5.archivo, tienda5.origen, tienda5.ocupacion, tienda5.precio, tienda5.key));
    arrayDef.push(new Personaje(tienda6.nombre, tienda6.archivo, tienda6.origen, tienda6.ocupacion, tienda6.precio, tienda6.key));
    arrayDef.push(new Personaje(tienda7.nombre, tienda7.archivo, tienda7.origen, tienda7.ocupacion, tienda7.precio, tienda7.key));
    localStorage.setItem("chapadmalal", JSON.stringify(arrayDef));
    for (const Personaje of arrayDef) {
        localStorage.setItem(Personaje.nombre, JSON.stringify(Personaje));
    }
}else{
    console.log("array tienda ya creado");
}
let count = 0;
/*for(const Personaje in JSON.parse(localStorage.getItem("chapadmalal"))){
    $(".article2").append(`
    <div>
        <p>Nombre: ${Personaje.nombre}</p>
        <img src="${Personaje.archivo}" width="100px">
        <p>Origen: ${Personaje.origen} </p>
        <p>Ocupacion: ${Personaje.ocupacion} </p>
        <p>Precio: ${Personaje.costo} </p>
        ${Personaje.key}
        <input type="submit" name="compra${count}" value="Comprar" id="comprar${count}" onclick="comprar${count}()">
    </div>
    `);
    count ++;
}*/

if (localStorage.getItem("Julio Cesar") === null) {
    console.log("Julio inexistente");
} else {
    let Personaje = JSON.parse(localStorage.getItem("Julio Cesar"));
    $(".article2").append(`
    <div>
        <p>Nombre: ${Personaje.nombre}</p>
        <img src="${Personaje.archivo}" width="100px">
        <p>Origen: ${Personaje.origen} </p>
        <p>Ocupacion: ${Personaje.ocupacion} </p>
        <p>Precio: ${Personaje.precio * 100} </p>
        <input type="submit" name="compra0" value="Comprar" id="comprar0"
    </div>
    `);
    count++;
}

if (localStorage.getItem("Rick") === null) {
    console.log("Rick inexistente");
} else {
    let Personaje = JSON.parse(localStorage.getItem("Rick"));
    $(".article2").append(`
    <div>
        <p>Nombre: ${Personaje.nombre}</p>
        <img src="${Personaje.archivo}" width="100px">
        <p>Origen: ${Personaje.origen} </p>
        <p>Ocupacion: ${Personaje.ocupacion} </p>
        <p>Precio: ${Personaje.precio * 100} </p>
        <input type="submit" name="compra1" value="Comprar" id="comprar1">
    </div>
    `);
    count++;
}
if (localStorage.getItem("Big Chungus") === null) {
    console.log("Chungus inexistente");
} else {
    let Personaje = JSON.parse(localStorage.getItem("Big Chungus"));
    $(".article2").append(`
    <div>
        <p>Nombre: ${Personaje.nombre}</p>
        <img src="${Personaje.archivo}" width="100px">
        <p>Origen: ${Personaje.origen} </p>
        <p>Ocupacion: ${Personaje.ocupacion} </p>
        <p>Precio: ${Personaje.precio * 100} </p>
        <input type="submit" name="compra2" value="Comprar" id="comprar2">
    </div>
    `);
    count++;
}
if (localStorage.getItem("Asterix") === null) {
    console.log("Asterix inexistente");
} else {
    let Personaje = JSON.parse(localStorage.getItem("Asterix"));
    $(".article2").append(`
    <div>
        <p>Nombre: ${Personaje.nombre}</p>
        <img src="${Personaje.archivo}" width="100px">
        <p>Origen: ${Personaje.origen} </p>
        <p>Ocupacion: ${Personaje.ocupacion} </p>
        <p>Precio: ${Personaje.precio * 100} </p>
        <input type="submit" name="compra3" value="Comprar" id="comprar3">
    </div>
    `);
    count++;
}
if (localStorage.getItem("Thresh") === null) {
    console.log("Thresh inexistente");
} else {
    let Personaje = JSON.parse(localStorage.getItem("Thresh"));
    $(".article2").append(`
    <div>
        <p>Nombre: ${Personaje.nombre}</p>
        <img src="${Personaje.archivo}" width="100px">
        <p>Origen: ${Personaje.origen} </p>
        <p>Ocupacion: ${Personaje.ocupacion} </p>
        <p>Precio: ${Personaje.precio * 100} </p>
        <input type="submit" name="compra4" value="Comprar" id="comprar4">
    </div>
    `);
    count++;
}
if (localStorage.getItem("Spiderman") === null) {
    console.log("Spiderman inexistente");
} else {
    let Personaje = JSON.parse(localStorage.getItem("Spiderman"));
    $(".article2").append(`
    <div>
        <p>Nombre: ${Personaje.nombre}</p>
        <img src="${Personaje.archivo}" width="100px">
        <p>Origen: ${Personaje.origen} </p>
        <p>Ocupacion: ${Personaje.ocupacion} </p>
        <p>Precio: ${Personaje.precio * 100} </p>
        <input type="submit" name="compra5" value="Comprar" id="comprar5">
    </div>
    `);
    count++;
}
if (localStorage.getItem("Shou Tucker") === null) {
    console.log("Shou Tucker inexistente");
} else {
    let Personaje = JSON.parse(localStorage.getItem("Shou Tucker"));
    $(".article2").append(`
    <div>
        <p>Nombre: ${Personaje.nombre}</p>
        <img src="${Personaje.archivo}" width="100px">
        <p>Origen: ${Personaje.origen} </p>
        <p>Ocupacion: ${Personaje.ocupacion} </p>
        <p>Precio: ${Personaje.precio * 100} </p>
        <input type="submit" name="compra6" value="Comprar" id="comprar6">
    </div>
    `);
    count++;
}
if (localStorage.getItem("Connor Kenway, Ratonhnhaké:ton") === null) {
    console.log("Connor Kenway inexistente");
} else {
    let Personaje = JSON.parse(localStorage.getItem("Connor Kenway, Ratonhnhaké:ton"));
    $(".article2").append(`
    <div>
        <p>Nombre: ${Personaje.nombre}</p>
        <img src="${Personaje.archivo}" width="100px">
        <p>Origen: ${Personaje.origen} </p>
        <p>Ocupacion: ${Personaje.ocupacion} </p>
        <p>Precio: ${Personaje.precio * 100} </p>
        <input type="submit" name="compra7" value="Comprar" id="comprar7">
    </div>
    `);
    count++;
}