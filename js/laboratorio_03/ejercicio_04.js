let edad = parseInt(prompt("Ingrese su edad: "));
let pais = prompt("Ingrese su pais");

if(edad >= 65 && pais == "Peru"){
    console.log("CONCEDIDO EL BONO");
}else{
    console.log("BONO RECHAZADO");
}