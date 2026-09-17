let nombreObrero = "Melvin Ostin";
let prendasVendidas = 10;

const tarifaPago = 10;
const conceptoImpuesto = 0.03;
const descuentoSeguro = 0.02;
const descuentoSolidaridad = 0.01;
const bonificacion = 0.05;

let pagoPuro = tarifaPago * prendasVendidas;
let pagoImpuesto = pagoPuro -(pagoPuro * conceptoImpuesto);
let pagoSeguro = pagoImpuesto -(pagoImpuesto * descuentoSeguro);
let pagoSolidaridad = pagoSeguro - (pagoSeguro* descuentoSolidaridad);
let pagoBonificacion = pagoSolidaridad * bonificacion;
let pagoTotal = pagoSolidaridad + pagoBonificacion;

console.log("Nombre : ", nombreObrero);
console.log("Prendas Vendidas : ", prendasVendidas);
console.log("Pago con Impuesto: ", pagoImpuesto);
console.log("Pago con Seguro: ", pagoSeguro);
console.log("Pago con Solidaridad: ", pagoSolidaridad.toFixed(2));
console.log("Pago Bonificacion: ", pagoBonificacion.toFixed(2));
console.log("Sueldo Neto : ", pagoTotal.toFixed(2));
