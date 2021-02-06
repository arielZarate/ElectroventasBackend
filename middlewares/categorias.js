const { schemas } = require("./schemas/categorias");

const validateCreate = (req, res, next) => {
  const { error, value } = schemas.create.validate(req.body);
  error ? res.status(422).json({ error: error.details[0].message }) : next();
};
//esto puede ser asycn  await

const validateModify = (req, res, next) => {
  try {
    const { error } = schemas.modify.validate(req.body);
    const valid = error == null;
    if (valid) {
      next();
    } else {
      const { details } = error;
      const message = details.map((i) => i.message).join(",");
    }
  } catch (error) {
    console.log({ error: message });
    res.status(422).json({ error: message });
  }
};
module.exports = { validateCreate, validateModify };
