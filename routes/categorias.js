const express = require("express");
const router = express.Router();
const service = require("../models/categorias");

//middelware
const {
  validateCreate,
  validateModify,
} = require("./../middlewares/categorias");

//************Metodo all*************** */
const all = async (req, res) => {
  try {
    const result = await service.getAll();
    console.log(result);
    res.json({ result });
  } catch (e) {
    res.status(500).json(e);
    //this.handlerError(e);
  }
};

//*************Metodo Single*************** */
const single = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const result = await service.getSingle(id);
    res.json({ result });
  } catch (e) {
    this.handlerError(e);
  }
};

//*********Metodo Create************* */
const create = async (req, res) => {
  try {
    console.log(req.body);

    const result = await service.create(req.body);
    console.log(result);
    res.json({ result });
    // .then((r) => res.json(r))
    //.catch((e) => res.sendStatus(500).json(e));
  } catch (e) {
    //console.log(e);
    res.sendStatus(500).json(e);
    //this.handlerError(e);
  }
};

/********Metodo Modify******* */
const modify = (req, res) => {
  try {
    service
      .modify(req.params.id, req.body)
      .then((response) => res.json(response))
      .catch((error) => res.status(500).json(error));
  } catch (e) {
    res.status(500).json(error);
  }
};

const SearchById = async (req, res) => {
  //declarando los arrays
  let filtered = [];
  let array = [];
  const data = await service.getAll();
  //res.json(data);
  array = data; //lo  convierto en array
  //const { id } = req.params;
  //  console.log("ID ingresado :" + id);
  //const filtered = array.map((e) => e.id);
  filtered = array.filter((e) => e.id == req.params.id);
  if (filtered.length > 0) {
    res.json(true);
  } else {
    res.json(false);
  }
};

//devuelve la cantidad de registro que coinciden con el id
const buscarReg = async (req, res) => {
  const { id } = req.params;
  await service
    .buscarRegistro(id)
    .then((r) => res.json(r))
    .catch((e) => res.sendStatus(500).json(e));
};

//*************Metodo para eliminar**************** */
const eliminado = async (req, res) => {
  try {
    const { id } = req.params;

    //console.log("El id a eliminar es " + id);
    await service
      .deleted(id)
      .then((e) => res.json(e))
      .catch((e) => res.sendStatus(500));
  } catch (e) {
    res.sendStatus(500).json({ Error: message.details[0] });
  }
};

//************Handler Error********************* */

const handlerError = ({ status }) => {
  if (status === 204) return "No Content";
  else if (status === 301) return "Moved Permanently";
  else if (status === 302) return "Moved Temporarily";
  else if (status === 400) return "Bad Request";
  else if (status === 404) return "Not Found";
  else if (status === 401) return "Unauthorized";
  else if (status === 500) return "Internal server Error";
};

//validateCreate,
router.get("/single/:id", single);
router.post("/create", validateCreate, create);
router.put("/modify/:id", validateModify, modify);
router.get("/eliminado/:id", eliminado);
router.get("/all", all);
//router.get("/buscar/:id", SearchById);
router.get("/buscarReg/:id", buscarReg);

module.exports = router;

///
