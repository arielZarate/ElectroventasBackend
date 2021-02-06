const { schemas } = require("./schemas/productos");

const validateCreate = async (req, res, next) => {
  const { error, value } = await schemas.create.validateAsync(req.body);
  error ? res.status(422).json({ error: error.details[0].message }) : next();
};

//esto puede ser asycn  await

const validateModify = async (req, res, next) => {
  try {
    const { error } = await schemas.modify.validateAsync(req.body);
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
