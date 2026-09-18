let hijosTotal = 5;
let estadoCivil = "VIUDA";
let estadoTrabajador = "PLANILLA"

let montoHijos = hijosTotal * 20;
if(estadoCivil === "VIUDA"){
    montoCivil = montoHijos + 70;
}else{
    montoCivil = hijosTotal + 0;
}
if(estadoTrabajador === "PLANILLA"){
    montoTrabajador = montoHijos + 50; 
}else{
    montoTrabajador = montoHijos + 0;
}

let montoTotal = montoHijos + montoCivil + montoTrabajador; 

console.log("Monto a recibir por hjos: ", montoHijos);
console.log("Monto a recibir si es viuda ", montoCivil);
console.log("Monto a recibir si su estado es planilla ", montoTrabajador);
console.log("MONTO TOTAL : ", montoTotal)