
let tienda0 = {nombre: "Rick", archivo: "https://rickandmortyapi.com/api/character/avatar/1.jpeg", origen: "Tierra, C 137", ocupacion: "Cientifico, Criminal, Genio", precio: "1000"};
let tienda1 = {nombre:"Julio Cesar", archivo:"https://canalhistoria.es/wp-content/uploads/2019/02/julio-cesar.jpg", origen:"Italia", ocupacion:"Emperador, Dictador, Militar", precio:"300"};
let tienda3 = {nombre:"Big Chungus", archivo:"../221d9dea5bed3ecd731606df30f82ea3.jpg", origen:"?", ocupacion:"Dios, Protector, Justiciero", precio:"80000"};
let tienda4 = {nombre:"Asterix", archivo:"https://www.asterix.com/illus/asterix-de-a-a-z/les-personnages/perso/g09b.gif", origen:"Galia, Francia", ocupacion:"Guerrero", precio:"500"};
let tienda5 = {nombre:"Thresh", archivo:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Thresh_0.jpg", origen:"Islas de las sombras", ocupacion:"Guardian, Soporte", precio:"480"};
let tienda6 = {nombre:"Spiderman", archivo:"https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/hc_1440x810/public/media/image/2020/10/marvels-spider-man-remastered-2109699.jpg?h=ddc58dd3&itok=qjT-2jMm", origen:"Nueva York", ocupacion:"Heroe, Fotografo", precio:"250"};
let tienda7 = {nombre:"Shou Tucker", archivo:"https://static1.cbrimages.com/wordpress/wp-content/uploads/2019/11/Shou-Tucker.jpg?q=50&fit=crop&w=740&h=370&dpr=1.5", origen:"Amestris", ocupacion:"Alquimista, Criminal", precio:"0"};
let tienda8 = {nombre:"Connor Kenway, Ratonhnhaké:ton", archivo:"https://pm1.narvii.com/6601/9b5c56ebd508f350ab601fd43af940cf954c925c_128.jpg", origen:"Mohawk Vallet, Estados Unidos", ocupacion:"Asesino, Cazador, Rebelde", precio:"500"};

if (localStorage.getItem("arrayTiendal") === null){
    localStorage.setItem("arrayTiendal", [tienda0, tienda1, tienda3, tienda4, tienda5, tienda6, tienda7, tienda8]);
}else{
    let arrayTienda = localStorage.getItem("arrayTiendal")
    console.log("2");
    alert(arrayTienda);
}