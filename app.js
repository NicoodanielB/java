
let numerodeorden = "";
let fecha = "";
let cliente = "";
let domicilio = "";
let mail = "";
let telefono = "";
let marca = "";
let modelo = "";
let serie = "";
let fallas = "";
let notas = "";

var objetos = [];

class Crearelemento{
    constructor(numerodeorden, fecha, cliente, domicilio, mail, telefono, marca, modelo, serie, fallas, notas) {
        this.numerodeorden = numerodeorden;
        this.fecha = fecha;
        this.cliente = cliente;
        this.domicilio = domicilio;
        this.mail = mail;
        this.telefono = telefono;
        this.marca = marca;
        this.modelo = modelo;
        this.serie = serie;
        this.fallas = fallas;
        this.notas = notas;
    }

}

var boton = $("#submit")
boton.click(function(){
console.log("Clickeado");
let elementos = document.querySelector(".formulariodeagregar")
let seleccionarimputs = elementos.querySelectorAll("input");
seleccionarimputs.forEach((elemento) => {

if(elemento.name == "numerodeorden"){
    numerodeorden = elemento.value;
    elemento.value = "";
    console.log(numerodeorden);
}else if(elemento.name == "fecha"){
    fecha = elemento.value;
    elemento.value = "";
    console.log(fecha);
}else if(elemento.name == "cliente"){
    cliente = elemento.value;
    elemento.value = "";

}else if(elemento.name == "domicilio"){
    domicilio = elemento.value;
    elemento.value = "";
}else if(elemento.name == "mail"){
    mail = elemento.value;
}else if(elemento.name == "telefono"){
    telefono = elemento.value;
}else if(elemento.name == "marca"){
    marca = elemento.value;
}else if(elemento.name == "modelo"){
    modelo = elemento.value;
}else if(elemento.name == "serie"){
    serie = elemento.value;
}else if(elemento.name == "fallas"){
    fallas = elemento.value;
}else if(elemento.name == "notas"){
    notas = elemento.value;
}

} )

objetos.push(new Crearelemento(numerodeorden, fecha, cliente, domicilio, mail, telefono, marca, modelo, serie, fallas, notas)); console.log(numerodeorden);})