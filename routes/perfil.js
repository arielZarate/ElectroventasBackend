//CODIGO REPETITIVO DE CADA ROUTES

const express = require("express");
const router = express.Router();
const service = require("./../models/users");

//ESTO ES LO MAS IMPORTANTE :
//TOMO EL REQ.ID DEL NAVEGADOR OBTENIDO EN EL MIDDELWARE AUTH.JS
//Y SE LO PASO POR PARAMETROS EN LA CONSULTA DEL SERVICE AL MODELS
//DE LA BD PARA HACER CUALQUIER CONSULTA EJEMPLO GET Y OBTENER LOS DATOS
const getProfile = async (req, res) => {
  //console.log("estando en perfil.js el id esta :" + req.id);
  try {
    const info = await service.get(req.id);
    // console.log("el resultado de la data del perfil es " + info);
    res.json("welcome a la jungle 💥💥💥");
    //res.json(info);
  } catch (e) {
    res.status(500).json(e);
  }
};

//por ahora enviamos un message

router.get("/", getProfile);

module.exports = router;

router.get("/", getProfile);
module.exports = router;
