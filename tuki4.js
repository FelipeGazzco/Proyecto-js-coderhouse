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
        this.id = id.value;
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

/*if (localStorage.getItem("arrayTiendal") === null){
    localStorage.setItem("arrayTiendal", [tienda0, tienda1, tienda2, tienda3, tienda4, tienda5, tienda6, tienda7]);
}else{
    let arrayTienda = localStorage.getItem("arrayTiendal")
    console.log("2");
}*/

arrayDef = [];

if(localStorage.getItem("chapadmalal") === null){
    arrayDef.push(new Personaje(tienda0.nombre, tienda0.archivo, tienda0.origen, tienda0.ocupacion, tienda0.precio));
    arrayDef.push(new Personaje(tienda1.nombre, tienda1.archivo, tienda1.origen, tienda1.ocupacion, tienda1.precio));
    arrayDef.push(new Personaje(tienda2.nombre, tienda2.archivo, tienda2.origen, tienda2.ocupacion, tienda2.precio));
    arrayDef.push(new Personaje(tienda3.nombre, tienda3.archivo, tienda3.origen, tienda3.ocupacion, tienda3.precio));
    arrayDef.push(new Personaje(tienda4.nombre, tienda4.archivo, tienda4.origen, tienda4.ocupacion, tienda4.precio));
    arrayDef.push(new Personaje(tienda5.nombre, tienda5.archivo, tienda5.origen, tienda5.ocupacion, tienda5.precio));
    arrayDef.push(new Personaje(tienda6.nombre, tienda6.archivo, tienda6.origen, tienda6.ocupacion, tienda6.precio));
    arrayDef.push(new Personaje(tienda7.nombre, tienda7.archivo, tienda7.origen, tienda7.ocupacion, tienda7.precio));
    localStorage.setItem("chapadmalal", JSON.stringify(arrayDef));
    let perso = JSON.parse(JSON.stringify(localStorage.getItem("chapadmalal")));
}else{
    console.log("array tienda ya creado");
    let perso = (localStorage.getItem("chapadmalal"));
}
let count = 0;
for(const Personaje in JSON.parse(localStorage.getItem("chapadmalal"))){
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `
    <div>
        <p>Nombre: ${Personaje.nombre}</p>
        <img src="${Personaje.archivo}" width="100px">
        <p>Origen: ${Personaje.origen} </p>
        <p>Ocupacion: ${Personaje.ocupacion} </p>
        <p>Precio: ${Personaje.costo} </p>
        <input type="submit" name="compra${count}" value="Comprar" id="comprar${count}" onclick="comprar${count}()">
    </div>
    `
    document.body.appendChild(contenedor);
    count ++;
}

/*let cero = 0
let perso = JSON.parse(JSON.stringify(localStorage.getItem("chapadmalal")));
if (cero = 0) {
    for(const Personaje in perso){
        $(".article2").append(`
        <div>
            <p>Nombre: ${Personaje.nombre}</p>
            <img src="${Personaje.archivo}" width="100px">
            <p>Origen: ${Personaje.origen} </p>
            <p>Ocupacion: ${Personaje.ocupacion} </p>
            <p>Precio: ${Personaje.costo} </p>
        </div>
        `);
    }
}*/

/*$(".article2").append(`
<div>
    <p>Nombre: ${Personaje.nombre}</p>
    <img src="${Personaje.archivo}" width="100px">
    <p>Origen: ${Personaje.origen} </p>
    <p>Ocupacion: ${Personaje.ocupacion} </p>
    <p>Precio: ${Personaje.costo} </p>
</div>
`);*/


