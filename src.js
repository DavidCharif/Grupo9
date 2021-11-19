// const calcularPorcentajes = (limiteCO, limiteCO2, limiteHC, limiteO2, valorCO, valorCO2, valorHC, valorO2) => {
//     let porcentajeCO = 0 
//     let porcentajeCO2 = 0 
//     let porcentajeHC = 0 
//     let porcentajeO2 = 0

//     if (limiteCO !== 0) {

//     } else {
        
//     }

//     return {}
// }

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



const registrarCO2 = (value) => {}
const registrarHC = (value) => {}
const registrarO2 = (value) => {}

module.exports.registrarCO = registrarCO;
// module.exports.calcularPorcentajes = calcularPorcentajes;