const bd = require("./../utils/bd");
//const bdService = require("../utils/dbService");
const T = require("../utils/schemas");

const getAll = () => bd(`${T.PERSONAS}`).select("*");

const create = (obj) => bd(`${T.PERSONAS}`).insert(obj);

const getSingle = (id) =>
  bd(`${T.PERSONAS}`)
    .where({ id, habilitado: true })
    .select("id", "nombre", "apellido", "mail", "telefono");

// insert return PK del elemento creado
const modify = (id, obj) => bd(`${T.PERSONAS}`).where({ id }).update(obj);
// Row data

const deleted = (id) => bd(`${T.PERSONAS}`).where({ id }).delete();

module.exports = { getAll, getSingle, modify, create, deleted };
