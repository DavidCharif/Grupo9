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
        porcentajeCO = (valorCO * limits[0]) /100 ;
    } else {
        porcentajeCO = 0
    }
    if (limits[1] !== 0) {
        porcentajeCO2 = (valorCO2 * limits[1]) / 100;
    } else {
        porcentajeCO2 = 0
    }
    if (limits[2] !== 0) {
        porcentajeHC = (valorHC * limits[2]) / 100;
    } else {
        porcentajeHC = 0
    }
    if (limits[3] !== 0) {
        porcentajeO2 = (valorO2 * limits[3]) / 100;
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

    let response = await fetch(urlRangos)
        .then(response => response.json())
        .catch(error => console.log(error));

    let rangosCO = response[0];
    
    if (value >= rangosCO.de && value <= rangosCO.hasta) {
        return 'Parametro CO en rango estandar';
    }
    else if (value >= 11 && value <= 15) {
        return 'Parametro CO fuera de rango';
    }
    else {
        return "fuera_de_rango";
    }
}

// registrarCO(16)

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
const registrarHC = async value => {
    let response = await fetch("https://misiontic2022upb.vercel.app/api/emission-measurement/limits");
    let limits = await response.json();
    let limitesHC = limits[2]

    let estandarDesde = limitesHC.de; 
    let estandarHasta = limitesHC.hasta;
    let etiquetaEstandar = "Parametro HC en rango estandar" ;
  
    
        if(value >= estandarDesde && value <= estandarHasta)
        { 
            console.log(etiquetaEstandar); 
            return etiquetaEstandar; 
            }
       else {
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

// registrarO2(52);

module.exports.calcularPocentajes = calcularPocentajes;
module.exports.registrarCO = registrarCO;
module.exports.registrarO2 = registrarO2;
module.exports.registrarHC = registrarHC;
module.exports.registrarCO2 = registrarCO2;

// module.exports.calcularPorcentajes = calcularPorcentajes;
