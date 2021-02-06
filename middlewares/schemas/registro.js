const Joi = require("@hapi/joi");
// nombre,apellido,mail, telefono, usuario,password
const schemas = {
  create: Joi.object().keys({
      
    nombre: Joi.string().required(),
    apellido: Joi.string().required(),
    correo: Joi.string().email().required(),
   
    usuario: Joi.string().min(5).max(15).required(),
    password: Joi.string().required(),
  }),
};

module.exports = { schemas };
