/* Import Modules */
// node-fetch permite hacer peticiones a una API en NodeJS. La FetchAPI solo sirve para peticiones en el navegador (como en un cliente frontend)
const fetch = require('node-fetch'); // Se debe comentar para cargar al bot

/* Historia de usuario 3 */
const calcularPocentajes = async (valorCO, valorCO2, valorHC, valorO2) => {

    let response = await fetch("https://misiontic2022upb.vercel.app/api/emission-measurement/limits");
    let limits = await response.json();

    let porcentajeCO;
    let porcentajeCO2;
    let porcentajeHC;
    let porcentajeO2;

    if (limits[0] !== 0) {
        porcentajeCO = (valorCO * 100) / limits[0];
    } else {
        porcentajeCO = 0
    }
    if (limits[1] !== 0) {
        porcentajeCO2 = (valorCO2 * 100) / limits[1];
    } else {
        porcentajeCO2 = 0
    }
    if (limits[2] !== 0) {
        porcentajeHC = (valorHC * 100) / limits[2];
    } else {
        porcentajeHC = 0
    }
    if (limits[3] !== 0) {
        porcentajeO2 = (valorO2 * 100) / limits[3];
    } else {
        porcentajeO2 = 0
    }
    let objetoReturn = {"porcentajeCO":porcentajeCO,"porcentajeCO2":porcentajeCO2,"porcentajeHC":porcentajeHC,"porcentajeO2" : porcentajeO2};
    return objetoReturn;
}


/* Historia de usuario 4 */
const urlRangos = "https://misiontic2022upb.vercel.app/api/emission-measurement/ranges-parameters";


/*
Jennifer
*/
// global.rangosCO = [
//     {etiqueta: 'Parametro CO en rango estandar', de: 0, hasta: 10},
//     {etiqueta: 'Parametro CO fuera de rango', de: 11, hasta: 15}
// ]

const registrarCO = async (value) => {
    let response = await fetch("https://misiontic2022upb.vercel.app/api/emission-measurement/ranges-parameters");
    let rangosCO = await response.json();
    let candidate = rangosCO[0];

    for (const element of candidate) {
        lst = Object.values(element);
        if (value >= lst[1] && value <= lst[2]) {
            return lst[0];
        }
    }
    return "fuera_de_rango";


}

/*
Daniela
*/
global.rangosCO2 = [
    {etiqueta: 'Parametro CO2 en rango estandar', de: 0, hasta: 20},
    {etiqueta: 'Parametro CO2 fuera de rango', de: 21, hasta: 30}
]

const registrarCO2 = (value) => {

    if (value >= global.rangosCO2[0].de && value <= global.rangosCO2[0].hasta) {
        return global.rangosCO2[0].etiqueta;
    }else if (value >= global.rangosCO2[1].de && value <= global.rangosCO2[1].hasta) {
        return global.rangosCO2[1].etiqueta;
    } else {
        return "fuera_de_rango";
    }
}

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

        if(value >= estandarDesde && value <= estandarHasta)
        {
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
// global.rangosO2 =
// [
//     {etiqueta: 'Parametro O2 en rango estandar', de: 0, hasta: 22},
//     {etiqueta: 'Parametro O2 fuera de rango', de: 23, hasta: 30}
// ]

const registrarO2 = async (value) => {

    let response = await fetch(urlRangos)
        .then(response => response.json())
        .catch(error => console.log(error));

    let rangosO2 = response[3] //Oxigeno

    if (value >= rangosO2.de && value <= rangosO2.hasta) {
        // console.log('Parametro O2 en rango estandar');
        return 'Parametro O2 en rango estandar';
    }
    else if (value >= 23 && value <= 30) {
        // console.log('Parametro O2 fuera de rango');
        return 'Parametro O2 fuera de rango';
    }
    else {
        // console.log("fuera_de_rango");
        return "fuera_de_rango";
    }
}

//registrarO2(52);

module.exports.calcularPocentajes = calcularPocentajes;
module.exports.registrarCO = registrarCO;
module.exports.registrarO2 = registrarO2;
module.exports.registrarHC = registrarHC;
module.exports.registrarCO2 = registrarCO2;

// module.exports.calcularPorcentajes = calcularPorcentajes;
