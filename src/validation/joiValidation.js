import Joi from 'joi'
import { messages } from './messages'

export const productItemSchema = Joi.object({
  productId:
    Joi.number()
      .positive()
      .integer()
      .required()
      .messages(messages.productId),

  name:
    Joi.string()
      .max(50)
      .trim()
      .required()
      .messages(messages.name),

  price:
    Joi.number()
      .positive()
      .integer()
      .max(1000000)
      .required()
      .messages(messages.price)
}).required()

export const cartItemSchema = Joi.object({
  cartId:
    Joi.number()
      .positive()
      .integer()
      .required()
      .messages(messages.cartId),
  amount:
    Joi.number()
      .positive()
      .integer()
      .required()
      .messages(messages.amount),

  item:
    productItemSchema.required()
      .messages(messages.item)
}).required()