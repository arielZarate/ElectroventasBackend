const fs = require("fs");
const publicKey = fs.readFileSync("./keys/public.pem");
const jwt = require("jsonwebtoken");

//para entrar al perfil primero debe pasar por el middelware quien validara
//si es el usuario y se verificara su token a desencriptar

const secured = (req, res, next) => {
  try {
    // req.headers.authorization
    const { authorization } = req.headers;

    //para desencriptar necesita el token y la clave publica para hacer la desencriptacion
    //esto me devuelve un ID
    const { id } = jwt.verify(authorization, publicKey); // { id: user.id }
    //  jwt.verify()

    //IMPORTANTE ESTO
    //si se autentifico el token
    // guarda el ID dentro del navegador/cabeceras o headers

    req.id = id;

    console.log("id guardado del navegador ", req.id);

    //sigue la secuencia con un next() es como un continue

    next();
  } catch (e) {
    res.status(401).json("No se ha podido validar su perfil " + e);
  }
};

module.exports = { secured };
