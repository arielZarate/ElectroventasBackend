const bd = require("../utils/bd");
const T = require("../utils/schemas");

const create = (obj) => bd(`${T.CATEGORIAS}`).insert(obj);

const modify = (id, obj) => bd(`${T.CATEGORIAS}`).where({ id }).update(obj);

const getAll = () =>
  bd(`${T.CATEGORIAS} as C`)
    //.join(`${T.PRODUCTOS} as P `, "P.idCategoria", "C.id")
    .select(
      "C.id as id",
      "C.nombre as Nombre de Categoria "
      //"C.habilitado as Estado de Categoria"
    );

const deleted = (id) => bd(`${T.CATEGORIAS}`).where({ id }).delete();

const getSingle = (id) =>
  bd(`${T.CATEGORIAS} as C`)
    //.join(`${T.CATEGORIAS} as C `, "P.idCategoria", "C.id")
    .where({ "C.id": id })
    .select(
      "C.id as id",
      "C.nombre as Categoria de Producto",
      "C.habilitado as Estado de Categoria"
      //"P.habilitado"
    );

//si devuelve count=1 es que hay registro sino devuelve 0 que no hay nada
const buscarRegistro = (id) =>
  bd(`${T.CATEGORIAS} as C`).where({ "C.id": id }).count();

module.exports = { create, getAll, getSingle, modify, deleted, buscarRegistro };
