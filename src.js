

const nombreGasMin = async () => {
  let response =  await fetch("https://misiontic2022upb.vercel.app/api/emission-measurement/ranges-parameters")
    .then(response => response.json())
    .catch(error => console.log("Error"));

  let nombreBajo = response[0].etiqueta;
  let valorBajo = response[0].hasta;

  for (const element of response) {
    if (element.hasta <= valorBajo) {
      nombreBajo = element.etiqueta;
      valorBajo = element.hasta; 
    }
  }
  return nombreBajo;
}

module.exports.nombreGasMin = nombreGasMin;