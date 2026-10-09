const pinCorrecto = "1234";

const intentos = ["4587", "4512", "4142"];
let intetosRealizados = 0;
const maximoIntentos = 3;
let accesoConcedido = false;

do{
    let pinIngresado = intentos[intetosRealizados];
    intetosRealizados++;

    console.log(`Intento ${intetosRealizados}: Ingresando PIN....`)
    if(pinIngresado === pinCorrecto){
        console.log("PIN ACEPTADO. BIENVENIDO AL SISTEMA")
        accessoConcidido = true;
    }else{
        console.log("PIN INCORRECTO");
    }
}while(!accesoConcedido && intetosRealizados < maximoIntentos);

if(!accesoConcedido){
    console.log("¡¡¡TARJETA BLOQUEADA!!!")
}


