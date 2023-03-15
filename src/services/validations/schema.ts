import Joi = require('joi');

export const loginSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

export const productSchema = Joi.object({
  name: Joi.string().min(3).required(),
  amount: Joi.string().min(3).required(),
});

export const userSchema = Joi.object({
  username: Joi.string().min(3).required(),
  vocation: Joi.string().min(3).required(),
  level: Joi.number().min(1).required(),
  password: Joi.string().min(8).required(),
});

export const orderSchema = Joi.object({
  productsIds: Joi.array()
    .items(Joi.number())
    .min(1)
    .required()
    .messages({
      'array.min': '"productsIds" must include only numbers',
    }),
  // https://joi.dev/api/?v=17.8.3.
});
