/*
Boceto Historia de Usuario 3

 const calcularPorcentajes = (limiteCO, limiteCO2, limiteHC, limiteO2, valorCO, valorCO2, valorHC, valorO2) => {
     let porcentajeCO = 0
     let porcentajeCO2 = 0
     let porcentajeHC = 0
     let porcentajeO2 = 0
    
    if (limiteCO !== 0) {

     } else {

    }

    return {}
}
*/


/*
Jennifer
*/
global.rangosCO = [
    {etiqueta: 'Parametro CO en rango estandar', de: 0, hasta: 10},
    {etiqueta: 'Parametro CO fuera de rango', de: 11, hasta: 15}
]

const registrarCO = (value) => {
    global.rangosCO.forEach(element => {
        lst = Object.values(element);
        // console.log(lst[0]);
        if (value > lst[1] && value < lst[2]) {
            console.log(lst[0]);
            return lst[0];
        }
    });
    console.log("fuera_de_rango");
}

// console.log(registrarCO(12));
registrarCO(8);
/*
Daniela
*/
global.rangosCO2 = [
    {etiqueta: 'Parametro CO2 en rango estandar', de: 0, hasta: 20},
    {etiqueta: 'Parametro CO2 fuera de rango', de: 21, hasta: 30}
]

const registrarCO2 = (value) => {}
/*
David
*/
//RegistrarCO2
// Arreglo global para la comparacion de los valores
global.rangosHC = [
    {etiqueta: 'Parametro HC en rango estandar', de: 0, hasta: 10000},
    {etiqueta: 'Parametro HC fuera de rango', de: 10001, hasta: 11000}
]

let estandarDesde = global.rangosHC[0].de;
let estandarHasta = global.rangosHC[0].hasta;
let etiquetaEstandar = global.rangosHC[0].etiqueta;
// Aparentemente no es necesario incluir los limites
/*
let fueraDeRangoDesde = global.rangosHC[1].de;
let fueraDeRangoHasta = global.rangosHC[1].hasta;
*/
const registrarHC = value => {
    if(value >= estandarDesde && value <= estandarHasta){
        console.log(etiquetaEstandar);
        return etiquetaEstandar;
    }
    else if (value < estandarDesde || value > estandarHasta){
    console.log("fuera_de_rango")
        return "fuera_de_rango"
    }
}


/*
Germán
*/

// Registrar O2
global.rangosO2 = [
    {etiqueta: 'Parametro O2 en rango estandar', de: 0, hasta: 22},
    {etiqueta: 'Parametro O2 fuera de rango', de: 23, hasta: 30}
]

const registrarO2 = (value) => {

    if (value >= global.rangosO2[0].de && value <= global.rangosO2[0].hasta) {
        console.log(global.rangosO2[0].etiqueta);
    }
    else {
        console.log(global.rangosO2[1].etiqueta);
    }
}

registrarO2(10);


module.exports.registrarCO = registrarCO;
module.exports.registrarO2 = registrarO2;
// module.exports.calcularPorcentajes = calcularPorcentajes;
