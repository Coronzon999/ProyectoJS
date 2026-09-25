<?php
    //VAMOS A DECLARAR TODAS LAS VARIABLES
    //NESECESARIAS
    $precios = [
        "Pantalones de Lana"   => 45.00,
        "Sueter de casimir"    => 100.00,
        "Blusa de seda"        => 14.00,
        "Camisola de seda"     => 10.00,
        "Falda recta"          => 40.00,
        "Saco de lana"         => 120.00
    ];

    $prenda = "Sueter de casimir";
    $cantidad = 8;

    //Ahora obtenemos el precio unitario
    //desde eñ arreglo
    $precioUnitario = $precios[$prenda];

    //Realizamos el calculo
    $montoVenta = $precioUnitario * $cantidad;
    
    //DETERMINAMOS EL PORCENTAJE DE DESCUENTO
    if($montoVenta < 100){
        $porcentajeDescuento = 0.02;
    }elseif($montoVenta <= 500){
        $porcentajeDescuento = 0.04;
    }elseif($montoVenta <= 1000){
        $porcentajeDescuento = 0.06;
    }elseif($montoVenta <= 1500){
        $porcentajeDescuento = 0.08;
    }else{
        $porcentajeDescuento = 0.20;
    }
    
    //Calculamos el monto descuento
    $montoDescuento = $montoVenta * $porcentajeDescuento;

    //CALCULAMOS EL MONTO NETO A PAGAR
    $montoNeto = $montoVenta - $montoDescuento;
    
    //CALCULAMOS EL IGV
    $tasaIGV = 0.18;
    $montoIGV =  $montoNeto * $tasaIGV;

    
    //FASE DE SALIDA: IMPRIMIMOS TODO
    echo "----------------------------------------------". "</br>";
    echo "...........DETALLES DE COMPRAS: TELAS Y MODA DE OTOÑO ISABEL..............". "</br>";
    echo "----------------------------------------------". "</br>";
    echo "PRENDA SELECCIONADA: ". $prenda. "</br>";
    echo "Cantidad: ". $cantidad. "</br>";
    echo "Precio Unitario: ". $precioUnitario. "</br>";
    echo "----------------------------------------------". "</br>";
    echo "Monto de Venta: ". $montoVenta. "</br>";
    echo "Descuento: ". $montoDescuento. "</br>";
    echo "IGV: ". $montoIGV. "</br>";
    echo "Monto neto a pagar: ". $montoNeto. "</br>";
    echo "----------------------------------------------". "</br>";

?>