if (localStorage.getItem("Julio Cesar") === null) {
    console.log("Julio suprimido");
}else{
    let comprar0 = document.getElementById("comprar0");
    comprar0.onclick = () => {
        if (localStorage.getItem("plataGuardada") >= 3) {
            let uno = "Julio Cesar";
            let dos = "https://canalhistoria.es/wp-content/uploads/2019/02/julio-cesar.jpg";
            let tres = "Italia";
            let cuatro = "Emperador, Dictador, Militar";
            let cinco = "300";
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
            localStorage.removeItem("Julio Cesar");
            document.location.reload();
        }else{
            alert("Imposible");
        }
    }
}


if (localStorage.getItem("Rick") === null) {
    console.log("Rick suprimido");
}else{
    let comprar1 = document.getElementById("comprar1");
    comprar1.onclick = () => {
        if (localStorage.getItem("plataGuardada") >= 10) {
            let uno = "Rick";
            let dos = "https://rickandmortyapi.com/api/character/avatar/1.jpeg";
            let tres = "Tierra, C 137";
            let cuatro = "Cientifico, Criminal, Genio";
            let cinco = "1000";
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
            localStorage.removeItem("Rick");
            document.location.reload();
        }else{
            alert("Imposible");
        }
    }
}


if (localStorage.getItem("Big Chungus") === null) {
    console.log("Chungus suprimido");
}else{
    let comprar2 = document.getElementById("comprar2");
    comprar2.onclick = () => {
        if (localStorage.getItem("plataGuardada") >= 800) {
            let uno = "Big Chungus";
            let dos = "../221d9dea5bed3ecd731606df30f82ea3.jpg";
            let tres = "?";
            let cuatro = "Dios, Protector, Justiciero";
            let cinco = "80000";
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
            localStorage.removeItem("Big Chungus");
            document.location.reload();
        }else{
            alert("Imposible");
        }
    }
}


if (localStorage.getItem("Asterix") === null) {
    console.log("Asterix suprimido");
}else{
    let comprar3 = document.getElementById("comprar3");
    comprar3.onclick = () => {
        if (localStorage.getItem("plataGuardada") >= 5) {
            let uno = "Asterix";
            let dos = "https://www.asterix.com/illus/asterix-de-a-a-z/les-personnages/perso/g09b.gif";
            let tres = "Galia, Francia";
            let cuatro = "Guerrero";
            let cinco = "500";
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
            localStorage.removeItem("Asterix");
            document.location.reload();
        }else{
            alert("Imposible");
        }
    }
}


if (localStorage.getItem("Thresh") === null) {
    console.log("Thresh suprimido");
}else{
    let comprar4 = document.getElementById("comprar4");
    comprar4.onclick = () => {
        if (localStorage.getItem("plataGuardada") >= 4.8) {
            let uno = "Thresh";
            let dos = "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Thresh_0.jpg";
            let tres = "Islas de las sombras";
            let cuatro = "Guardian, Soporteo";
            let cinco = "480";
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
            localStorage.removeItem("Thresh");
            document.location.reload();
        }else{
            alert("Imposible");
        }
    }
}


if (localStorage.getItem("Spiderman") === null) {
    console.log("Spiderman suprimido");
}else{
    let comprar5 = document.getElementById("comprar5");
    comprar5.onclick = () => {
        if (localStorage.getItem("plataGuardada") >= 2.5) {
            let uno ="Spiderman";
            let dos = "ttps://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/hc_1440x810/public/media/image/2020/10/marvels-spider-man-remastered-2109699.jpg?h=ddc58dd3&itok=qjT-2jMm";
            let tres = "Nueva York";
            let cuatro = "Heroe, Fotografo";
            let cinco = "250";
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
            localStorage.removeItem("Spiderman");
            document.location.reload();
        }else{
            alert("Imposible");
        }
    }
}


if (localStorage.getItem("Shou Tucker") === null) {
    console.log("Shou Tucker suprimido");
}else{
    let comprar6 = document.getElementById("comprar6");
    comprar6.onclick = () => {
        if (localStorage.getItem("plataGuardada") >= 0) {
            let uno = "Shou Tucker";
            let dos = "https://static1.cbrimages.com/wordpress/wp-content/uploads/2019/11/Shou-Tucker.jpg?q=50&fit=crop&w=740&h=370&dpr=1.5";
            let tres = "Amestris";
            let cuatro = "Alquimista, Criminal";
            let cinco = "0";
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
            localStorage.removeItem("Shou Tucker");
            document.location.reload();
        }else{
            alert("Imposible");
        }
    }
}


if (localStorage.getItem("Connor Kenway, Ratonhnhaké:ton") === null) {
    console.log("Connor suprimido");
}else{
    let comprar7 = document.getElementById("comprar7");
    comprar7.onclick = () => {
        if (localStorage.getItem("plataGuardada") >= 5) {
            let uno = "Connor Kenway, Ratonhnhaké:ton";
            let dos = "https://pm1.narvii.com/6601/9b5c56ebd508f350ab601fd43af940cf954c925c_128.jpg";
            let tres = "Mohawk Valley, Estados Unidos";
            let cuatro = "Asesino, Cazador, Rebelde;"
            let cinco = "500";
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
            localStorage.removeItem("Connor Kenway, Ratonhnhaké:ton");
            document.location.reload();
        }else{
            alert("Imposible");
        }
    }
}

