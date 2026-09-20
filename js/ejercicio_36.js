let nombreMadre = "Anna";
let estadoCivil = "CASADA";
let bono = 0;

if(estadoCivil === "CASADA"){
    bono = bono + 40;
}else{
    bono = bono + 0;
}
if(estadoCivil === "SOLTERA"){
    bono = bono + 35;
}else{
    bono = bono + 0;
}
if(estadoCivil === "VIUDA"){
    bono = bono + 55;
}else{
    bono = bono + 0;
}

console.log("Nombre de la madre: ", nombreMadre);
console.log("Estado Civil: ", estadoCivil);
console.log("Bono a recibir: ", bono);