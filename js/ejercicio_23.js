let sueldoHora = 10;
let horasTrabajadas = 50;


let sueldoBase =  horasTrabajadas * sueldoHora;
let horasExtrasTotales = horasTrabajadas - 40;
if (horasExtrasTotales <= 8) {
    horasExtrasTotales = horasExtrasTotales * (sueldoHora * 2);
} else {
    let pagoDobles = horasExtrasTotales * (sueldoHora * 2);
    let pagoTriples = sueldoHora * 3;
    
    sueldoExtra = pagoDobles + pagoTriples;
}

console.log("Sueldo Base : ", sueldoBase);
console.log("Horas Extras Pagadas: ", sueldoExtra);
console.log("Total a Pagar: ", sueldoBase + sueldoExtra);

