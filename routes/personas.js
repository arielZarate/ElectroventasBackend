const express = require("express");
const router = express.Router();
const service = require("./../models/personas");
const { validateCreate, validateModify } = require("./../middlewares/personas");

const all = (req, res) =>
  service
    .getAll()
    .then((response) => res.json(response))
    .catch((e) => res.status(500).json(e));

const single = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await service.getSingle(id);
    res.json(result);
  } catch (e) {
    res.status(500).json(e);
  }
};

const create = (req, res) =>
  service
    .create(req.body)
    .then((response) => res.json(response))
    .catch((e) => res.json(e));

const modify = (req, res) =>
  service
    .modify(req.params.id, req.body)
    .then((response) => res.json(response))
    .catch((error) => res.status(500).json(error));

//ultimo creado
const deleted = (req, res) =>
  service
    .deleted(req.params.id)
    .then((r) => res.json(r))
    .catch((e) => res.status(500).json(e));

router.get("/single/:id", single);
router.post("/create", validateCreate, create);
router.put("/modify/:id", validateModify, modify);
router.get("/all", all);
router.get("/deleted", deleted);

module.exports = router;
