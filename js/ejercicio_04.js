let nombreEmpleado="Juan";
let horasTrabajadas = 40;
let tarifaHora = 50;

let salarioBruto = horasTrabajadas * tarifaHora;
const impuesto = salarioBruto * 0.10;
let salarioNeto = salarioBruto - impuesto;

console.log("---------BOLETA DE PAGO-----------")
console.log("💁‍♂️Nombre del Empleado: ", nombreEmpleado);
console.log("🕜Horas trabajadas: ",  horasTrabajadas);
console.log("🕛Tarifa por hora: ", tarifaHora);
console.log("💴Salario Bruto: ", salarioBruto);
console.log("🏦Descuento: ", impuesto);
console.log("🤑Salario Neto: ", salarioNeto)