// Configuración inicial
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

let ranges_parameters = [{"etiqueta":"Monoxido de carbono","de":0,"hasta":10},{"etiqueta":"Dioxido de carbono","de":0,"hasta":20},{"etiqueta":"Hidrocarburos","de":0,"hasta":10000},{"etiqueta":"Oxigeno","de":0,"hasta":22}]

// let limits = {"Parametro CO en rango estandar":10,"Parametro CO2 en rango estandar":20,"Parametro HC en rango estandar":10000,"Parametro O2 en rango estandar":22}

// Esqueleto del controlador
app.get("/api/emission-measurement/ranges_parameters", (req, res) => {
    res.json(ranges_parameters);
});

app.get("/api/emission-measurement/limits", (req, res) => {
  // Pruebas con el bot 
  // res.send({
  //   "limits": limits
  // });
});

app.post("/api/emission-measurement/ranges_parameters", (req, res) => {
  ranges_parameters.push(req.body);
  res.json(ranges_parameters);

});

// const port = 3000;
// app.listen(port, () => { console.log(`Example app listening at http://localhost:${port}`) })


module.exports = app;
