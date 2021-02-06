const Joi = require("@hapi/joi");
const messageNombre = {
  "any.required": "El campo nombre es obligatorio",
  "string.min": "El campo debe tener al menos 2 caracteres",
  "string.max": "El campo nombre no debe superar 45 caracteres",
};

const messageApellido = {
  "any.required": "El campo apellido es obligatorio",
  "string.min": "El campo debe tener al menos 2 caracteres",
  "string.max": "El campo nombre no debe superar 45 caracteres",
};

/*
const messageEmail = {
  "any.required": "El campo email es obligatorio ,verifique",
  //"string.min": "El campo debe tener al menos 2 caracteres",
  //"string.max": "El campo nombre no debe superar 45 caracteres",
};
*/
const schemas = {
  create: Joi.object().keys({
    nombre: Joi.string().min(2).max(45).required().messages(messageNombre),
    apellido: Joi.string().min(2).max(45).required().messages(messageApellido),
    dni: Joi.number().required(),
    mail: Joi.string().email().required(),
    telefono: Joi.number().required(),
    //habilitado: Joi.string().required(),
  }),

  modify: Joi.object().keys({
    //id: Joi.number().integer().positive().required(),
    nombre: Joi.string().min(2).max(45).required().messages(messageNombre),
    apellido: Joi.string().min(2).max(45).required().messages(messageApellido),
    dni: Joi.number().required(),
    mail: Joi.string().email().required(),
    telefono: Joi.number().required(),
    //habilitado: Joi.string().required(),
  }),
};

module.exports = { schemas };
