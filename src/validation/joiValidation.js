import Joi from 'joi'
import { messages } from './messages'


// Remember to use RED, GREEN, REFACTOR
// 1. pick one test case in validation.test.js
// 2. write the code, verify that the test is RED
// 3. write code in this file so that the test case becomes GREEN
// 4. refactor as neccessary before you move on to the next
// 5. repeat

export const productItemSchema = Joi.object({
  id:
    Joi.number()
      .positive()
      .integer()
      .required()
      .messages(messages.id),

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
})

export const cartItemSchema = Joi.object({
  id:
    Joi.number()
      .positive()
      .integer()
      .required()
      .messages(messages.id),
  amount:
    Joi.number()
      .positive()
      .integer()
      .required()
      .messages(messages.amount),

  item:
    productItemSchema.required()
      .messages(messages.item)
})