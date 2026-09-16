let nombreProducto ="Mouse Optico";
let precioProducto = 100;

const porcentajeDescuento = 0.08;
const porcentajeIgv = 0.18;

let descuento = precioProducto * porcentajeDescuento;
let subtotal = precioProducto - descuento;
let montoIgv = subtotal * porcentajeIgv;
let totalPagar = subtotal + montoIgv;

console.log("🛒Producto : ", nombreProducto);
console.log("💵Precio base : ", precioProducto);
console.log("Descuento(8%): ", descuento);
console.log("Subtotal S/ : ", subtotal);
console.log("IGV (18%) S/ :", montoIgv);
console.log("Total a Pagar S/ :", totalPagar)


