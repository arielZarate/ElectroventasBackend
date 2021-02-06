// npm i nodemailer
const nodemailer = require("nodemailer");

const send = async ({ to, subject = "Gracias por registrarte", html }) => {
  try {
    const transporter = nodemailer.createTransport({
      service: process.env.CORREO_SERVICE,
      auth: {
        user: process.env.CORREO_USER,
        pass: process.env.CORREO_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mail = {
      from: process.env.CORREO_USER, //es el noreplay
      to,
      subject,
      html,
    };


    //esta es la operacion que va demorar  que abre el socket 
    //por eso miestras tanto haga eso le decimos async await 

    //el envio del correo nos devuelve un unico id o UUID
    const { messageId } = await transporter.sendMail(mail);
    return messageId;

    
  } catch (e) {
    console.log(e);
  }
};

module.exports = { send };
