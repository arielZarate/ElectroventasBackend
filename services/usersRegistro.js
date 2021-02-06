const bd = require("../utils/bd");
const { v4: uuid } = require("uuid");
const sha1 = require("sha1");
const { send } = require("./mail");


const create = async (obj) => {
  try {
    const { nombre, apellido,correo } = obj;
   // const persona = { nombre, apellido, mail, telefono };
    //const [idPersona] = await bd("personas").insert(persona); // [4]

    const { usuario, password } = obj;
    const user = {
      nombre,
      apellido,
      correo,
      usuario,
      password: sha1(password),
      uidCorreo: uuid(),
    };
      //ca inserto los datos del usuario a la table
    const [idUsuario] = await bd("usuarios").insert(user);
  
    console.log("el id del usuario es :" ,idUsuario);
    // envie un mail

    
    const messageId = await send({
      to: mail,
      subject: "Gracias por registrate",
      html: "Envio de link unico para validar"
      /*
      `<h1> HOLA ${nombre}, bienvenido a la app PEPITO <h1>
                    <a href= "${process.env.URL_CONFIRM}user/confirm?token=${token}&uid=${uid}">
                    <p> Siga el enlace para confirmar su cuenta <p>`
      */
    });
      console.log("el id del correo es : " ,messageId);
    return messageId;

    
    
  } catch (e) {
    console.log(e);
  }
};
module.exports = { create };
