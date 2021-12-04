// Configuración inicial
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Esqueleto del controlador
app.get("/api/emission-measurement/ranges_parameters", (req, res) => {

});

app.get("/api/emission-measurement/limits", (req, res) => {

});

app.post("/api/emission-measurement/ranges_parameters", (req, res) => {
  ranges_parameters.push(req.body);
  res.json(ranges_parameters);

});



module.exports = app;
