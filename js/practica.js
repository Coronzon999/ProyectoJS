const sueldoColaboradores = [2500, 1300, 4800, 5300, 2500, 1400, 4600, 4200, 3900, 2800, 2400, 2200, 6500, 1500,
  1400, 2200, 3800, 4000, 7500, 1400, 3600, 6400, 3900, 6800,
  4600, 1100, 3100, 6500, 5400, 4600, 3000, 3800, 5400, 2400,
  2200, 5900, 2300, 5600, 5500, 4400, 1600, 6900, 2600, 5900,
  2100, 4800, 5700, 3500, 1900, 1600, 4000, 4800, 2100, 4000
];

const porcentajeAguinaldo = 0.20;

for(i = 0; i < sueldoColaboradores.length; i++){

    let sueldoBase = sueldoColaboradores[i];
    let aguinaldo =  sueldoBase * porcentajeAguinaldo;
    let totalPagar = sueldoBase + aguinaldo;

    console.log("SueldoBase: ", sueldoBase)
    console.log("Aguinaldo: ", aguinaldo.toFixed(2));
    console.log("Sueldofinal: ", totalPagar.toFixed(2));
}