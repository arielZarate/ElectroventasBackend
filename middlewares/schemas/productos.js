const Joi = require("@hapi/joi");

//********HAPI/JOI********* */
const messageNombre = {
  "any.required": "El campo nombre es obligatorio",
  "any.empty": "no está permitido que sea vacío",
  "string.min": "El campo Nombre debe tener al menos 3 caracteres",
  "string.max": "El campo Nombre no debe superar 45 caracteres",
};

const messageMarca = {
  "any.required": "El campo marca es obligatorio",
  "any.empty": "no está permitido que sea vacío",
  "string.min": "El campo Marca debe tener al menos 3 caracteres",
  "string.max": "El campo Marca no debe superar 45 caracteres",
};

const schemas = {
  create: Joi.object().keys({
    nombre: Joi.string().min(3).max(30).required().messages(messageNombre),
    precio: Joi.number().integer().positive().required(),
    marca: Joi.string().min(3).max(30).required().messages(messageMarca),
    stock: Joi.number().integer().positive().min(0).max(10000).required(),
    idCategoria: Joi.number().integer().positive().required(),
    habilitado: Joi.required(),
  }),

  modify: Joi.object().keys({
    nombre: Joi.string().min(3).max(30).required().messages(messageNombre),
    precio: Joi.number().integer().positive().required(),
    marca: Joi.string().min(3).max(30).required().messages(messageMarca),
    stock: Joi.number().integer().positive().min(0).max(10000).required(),
    idCategoria: Joi.number().integer().positive().required(),
    habilitado: Joi.required(),
  }),
};

module.exports = { schemas };
