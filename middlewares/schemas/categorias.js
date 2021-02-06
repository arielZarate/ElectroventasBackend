const Joi = require("@hapi/joi");

//********HAPI/JOI********* */
const messageNombre = {
  "any.required": "El campo nombre es obligatorio",
  "any.empty": "no está permitido que sea vacío",
  "string.min": "El campo Nombre debe tener al menos 3 caracteres",
  "string.max": "El campo Nombre no debe superar 45 caracteres",
};

const schemas = {
  create: Joi.object().keys({
    //se cambio a autoincremental
    //id: Joi.number().integer().positive().required(),
    nombre: Joi.string().min(3).max(30).required().messages(messageNombre),
    habilitado: Joi.required(),
  }),
  modify: Joi.object().keys({
    //id: Joi.number().integer().positive().required(),
    nombre: Joi.string().min(3).max(30).required().messages(messageNombre),
    habilitado: Joi.required(),
  }),
};

module.exports = { schemas };
