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
            let arrayidnoalmacen = JSON.parse(JSON.stringify(localStorage.getItem("arrayID")));
            let id = new ID("rick");
            arrayidnoalmacen.push(id);
            localStorage.setItem("arrayID", JSON.stringify(arrayidnoalmacen));
        }
        document.location.reload();
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
            let arrayidnoalmacen = JSON.parse(JSON.stringify(localStorage.getItem("arrayID")));
            let id = new ID("julio");
            arrayidnoalmacen.push(id);
            localStorage.setItem("arrayID", arrayidnoalmacen);
        }
        document.location.reload();
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
            let arrayidnoalmacen = JSON.parse(JSON.stringify(localStorage.getItem("arrayID")));
            let id = new ID("chungus");
            arrayidnoalmacen.push(id);
            localStorage.setItem("arrayID", JSON.stringify(arrayidnoalmacen));
        }
        document.location.reload();
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
            let arrayidnoalmacen = JSON.parse(JSON.stringify(localStorage.getItem("arrayID")));
            let id = new ID("asterix");
            arrayidnoalmacen.push(id);
            localStorage.setItem("arrayID", JSON.stringify(arrayidnoalmacen));
        }
        document.location.reload();
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
            let arrayidnoalmacen = JSON.parse(JSON.stringify(localStorage.getItem("arrayID")));
            let id = new ID("leagueoflegends");
            arrayidnoalmacen.push(id);
            localStorage.setItem("arrayID", JSON.stringify(arrayidnoalmacen));
        }
        document.location.reload();
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
            let id = new ID("peteparker");
            arrayidnoalmacen.push(id);
            localStorage.setItem("arrayID", arrayidnoalmacen);
        } else{
            let arrayidnoalmacen = JSON.parse(JSON.stringify(localStorage.getItem("arrayID")));
            let id = "peteparker"
            arrayidnoalmacen.push(new ID(id));
            localStorage.setItem("arrayID", JSON.stringify(arrayidnoalmacen));
        }
        document.location.reload();
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
            let arrayidnoalmacen = JSON.parse(JSON.stringify(localStorage.getItem("arrayID")));
            let id = new ID("fullmetal");
            arrayidnoalmacen.push(id);
            localStorage.setItem("arrayID", JSON.stringify(arrayidnoalmacen));
        }
        document.location.reload();
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
            let arrayidnoalmacen = JSON.parse(JSON.stringify(localStorage.getItem("arrayID")));
            let id = new ID("assasin");
            arrayidnoalmacen.push(id);
            localStorage.setItem("arrayID", JSON.stringify(arrayidnoalmacen));
        }
        document.location.reload();
    }else{
        alert("Imposible");
    }
}

/*let listaespecial = localStorage.getItem("arrayID");
if (listaespecial === null) {
    console.log("no");
} else{
    console.log(Object.values(listaespecial));
    for(let value of listaespecial){
        console.log(value);
    }
}*/