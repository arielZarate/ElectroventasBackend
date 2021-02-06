const e = require("express");
//const { orWhere } = require("./../utils/bd");
const bd = require("./../utils/bd");

const get = (id) => {
  try {
    bd("usuarios").where({ id }).select("usuario");
  } catch (e) {
    console.log(e.message());
  }
};

//habilitado:true
//update usuarios set=habilitadotrue where uidcorreo=req.params.uuid
//update usuarios set... where id=!

//si llega el parametro lo pasa sino enviara objeto vacio
//ademas con el destructuring no hace falta respetar el orden
//nos basta con que llegue los elmentos que deben llegar y listo

const update = ({ id = false, obj, uidCorreo = {} }) =>
  bd("usuarios").where(id).orWhere({ uidCorreo }).update(obj);

module.exports = { get, update };
