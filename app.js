class Crearelemento{
    constructor(numerodeorden, especificaciones, reparacion, precio){
        numerodeorden = numerodeorden;
        especificaciones = especificaciones;
        reparacion = reparacion;
        precio = precio;
    }

}

let numerodeorden = 0;
let boton = document.getElementById("boton");

boton.addEventListener("click", () => {
console.log("SELECCIONADO");
})
function generarorden(){
 numerodeorden ++;

 /*    let especificaciones = prompt("Ingrese las especificaciones de la computadora");
    let reparacion = prompt("Ingrese los daños a reparar");
    let precio = Number(prompt("Ingrese el precio")); */
/*     let tabla = document.createElement("table");
    tabla.setAttribute("border", "3"); intente crear una tabla con celdas pero no pude
    document.body.appendChild(tabla); */

 let elemento = new Crearelemento(numerodeorden, especificaciones, reparacion, precio);
console.log(numerodeorden);
}