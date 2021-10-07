let numeros = [];

class Crearelemento{
    constructor(numerodeorden, especificaciones, reparacion, precio){
        numerodeorden = numerodeorden;
        especificaciones = especificaciones;
        reparacion = reparacion;
        precio = precio;
    }
}

let numerodeorden = 0;
function generarelemento(){
for (i = numerodeorden; i++;) {
    let especificaciones = prompt("Ingrese las especificaciones de la computadora");
    let reparacion = prompt("Ingrese los daños a reparar");
    let precio = Number(prompt("Ingrese el precio"));
    Crearelemento(numerodeorden, especificaciones, reparacion, precio);
    numeros.push(Crearelemento);
    console.log(numerodeorden);
break;
}
}