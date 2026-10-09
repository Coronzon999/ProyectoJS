let precioArticulo = [120, 80, 60, 130, 180];
let descuento = 0.15;

for(i = 0; i < precioArticulo.length; i++){

    precioProducto = precioArticulo[i];
    precioDescuento = precioProducto * descuento;
    precioFinal = precioProducto - precioDescuento;

    if(precioFinal > 100){
        console.log(`Precio Final: S/ ${precioFinal} . TIENE DESCUESCUENTO`);
    }else{
        console.log(`Precio Final: S/ ${precioFinal} . NO TIENE DESCUESCUENTO`);
    }
}