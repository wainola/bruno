const Joi = require('joi');

const authSchema = Joi.object().keys({
  user: Joi.object().keys({
    id: Joi.string()
      .uuid()
      .required(),
    name: Joi.string().required(),
    lastname: Joi.string().required(),
    age: Joi.number().required(),
    role: Joi.string().required(),
    createdAt: Joi.string().required(),
    updatedAt: Joi.string(),
    deletedAt: Joi.string()
  })
});

module.exports = {
  authSchema
};
