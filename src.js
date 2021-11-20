/* Historia de usuario 3 */ 
const calcularPocentajes=  (limiteCO, limiteCO2, limiteHC, limiteO2, valorCO, valorCO2, valorHC, valorO2) => {
     
     let porcentajeCO;
     let porcentajeCO2;
     let porcentajeHC;
     let porcentajeO2;
    
    if (limiteCO !== 0) {
        porcentajeCO = (valorCO * 100) / limiteCO;
     } else {
         porcentajeCO = 0
    }
    if (limiteCO2 !== 0) {
        porcentajeCO2 = (valorCO2 * 100) / limiteCO2;
     } else {
         porcentajeCO2 = 0
    }
    if (limiteHC !== 0) {
        porcentajeHC = (valorHC * 100) / limiteHC;
     } else {
         porcentajeHC = 0
    }
    if (limiteO2 !== 0) {
        porcentajeO2 = (valorO2 * 100) / limiteO2;
     } else {
         porcentajeO2 = 0
    }
    let objetoReturn = {"porcentajeCO":porcentajeCO,"porcentajeCO2":porcentajeCO2,"porcentajeHC":porcentajeHC,"porcentajeO2" : porcentajeO2};
    return objetoReturn;
}


/* Historia de usuario 4 */ 
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

const registrarHC = value => {
let estandarDesde = global.rangosHC[0].de;
let estandarHasta = global.rangosHC[0].hasta;
let etiquetaEstandar = global.rangosHC[0].etiqueta;
let fueraRangoEtiqueta = global.rangosHC[1].etiqueta;
let fueraDeRangoDesde = global.rangosHC[1].de;
let fueraDeRangoHasta = global.rangosHC[1].hasta;
    if(value >= estandarDesde && value <= estandarHasta){
        console.log(etiquetaEstandar);
        return etiquetaEstandar;
    }
    else if (value >= fueraDeRangoDesde && value <= fueraDeRangoHasta){
    
        return fueraRangoEtiqueta
        
    } else {
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
module.exports.registrarHC = registrarHC;
// module.exports.calcularPorcentajes = calcularPorcentajes;
