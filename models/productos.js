const bd = require("../utils/bd");
const T = require("../utils/schemas");
//`${T.PRODUCTOS}`

const create = (obj) => bd(`${T.PRODUCTOS}`).insert(obj);

const modify = (id, obj) => bd(`${T.PRODUCTOS}`).where({ id }).update(obj);

const getAll = () =>
  bd(`${T.PRODUCTOS} as P`)
    .join(`${T.CATEGORIAS} as C `, "P.idCategoria", "C.id")
    .select(
      "P.id ",
      "P.nombre",
      "P.precio",
      "P.marca",
      "P.stock",
      "C.nombre as Categoria de Producto"
      //"P.habilitado"
    );

const deleted = (id) => bd(`${T.PRODUCTOS}`).where({ id }).delete();

const getSingle = (id) =>
  bd(`${T.PRODUCTOS} as P`)
    .join(`${T.CATEGORIAS} as C `, "P.idCategoria", "C.id")
    .where({ "P.id": id })
    .select(
      "P.id as ID del Producto",
      "P.nombre as Nombre del Producto",
      "P.precio",
      "P.marca",
      "P.stock",
      "C.nombre as Categoria de Producto"
      //"P.habilitado"
    );

//si devuelve count=1 es que hay registro sino devuelve 0 que no hay nada
const buscarRegistro = (id) =>
  bd(`${T.PRODUCTOS} as P`)
    .join(`${T.CATEGORIAS} as C `, "P.idCategoria", "C.id")
    .where({ "P.id": id })
    .count();

module.exports = { create, getAll, getSingle, modify, deleted, buscarRegistro };
