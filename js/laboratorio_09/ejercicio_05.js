let precioProducto = [100, 40, 14, 0];

for(i = 0; i < precioProducto.length; i++){
    precio = precioProducto[i];

    if(precio > 0){
        console.log(`El precio del Producto: S/ ${precio}`)
    }else{
        console.log("Compra Finalizada")
    }
}