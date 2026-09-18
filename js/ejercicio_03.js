let nombreObrero = "Melvin Ostin";
let prendasVendidas = 300;

const tarifaPago = 10;
const conceptoImpuesto = 0.03;
const descuentoSeguro = 0.02;
const descuentoSolidaridad = 0.01;
const bonificacion = 0.05;

let pagoPuro = tarifaPago * prendasVendidas;
let pagoImpuesto = pagoPuro * conceptoImpuesto;
let pagoSeguro = pagoPuro * descuentoSeguro;
let pagoSolidaridad = pagoPuro * descuentoSolidaridad;
let pagoBonificacion = pagoPuro * bonificacion;
let pagoDescuento = pagoPuro - pagoImpuesto - pagoSeguro - pagoSolidaridad;
let pagoTotal = pagoDescuento  + pagoBonificacion;

console.log("Nombre : ", nombreObrero);
console.log("Prendas Vendidas : ", prendasVendidas);
console.log("Pago con Impuesto: -", pagoImpuesto);
console.log("Pago con Seguro: -", pagoSeguro);
console.log("Pago con Solidaridad: -", pagoSolidaridad);
console.log("Pago Bonificacion: +", pagoBonificacion);
console.log("Sueldo Neto : ", pagoTotal);
