//CLASIFICACION DE RENDIMIENTO ACADEMICO
let promedio =parseInt(prompt("Ingrese su Promedio: "));

if(promedio >= 18 && promedio <= 20){
    console.log("RENDIMIENTO ¡EXCELENTE!");
}else if (promedio >= 14){
    console.log("RENDIMIENTO ¡BUENO!");
}else if (promedio >= 11){
    console.log("RENDIMIENTO MALO");
}else if(promedio >=0){
    console.log("RENDIMIENTO ¡PESIMO!");
}else{
    console.log("PROMEDIO ¡INVALIDO!")
}