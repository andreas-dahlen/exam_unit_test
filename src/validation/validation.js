import { cartItemSchema, productItemSchema } from './joiValidation'


// Remember to use RED, GREEN, REFACTOR
// 1. pick one test case in validation.test.js
// 2. write the code, verify that the test is RED
// 3. write code in this file so that the test case becomes GREEN
// 4. refactor as neccessary before you move on to the next
// 5. repeat

export function isCartItem(maybeCartItem) {
  const { error } = cartItemSchema.validate(
    maybeCartItem,
    {
      abortEarly: false,
      covert: false
    }
  )
  return !error
}

export function isProduct(maybeProduct) {
  const { error } = productItemSchema.validate(
    maybeProduct,
    {
      abortEarly: false,
      convert: false
    }
  )
  return !error
}



export function getProductError(maybeProduct) {
  const { error } = productItemSchema.validate(
    maybeProduct,
    {
      abortEarly: false,
      convert: false
    }
  )
  return error || null
}


// export function idProductError(id) {
//   const { error } = productItemSchema
//     .extract('id')
//     .validate(id, { convert: false })

//   return error || null
// }
// export function nameProductError(name) {
//   const { error } = productItemSchema
//     .extract('name')
//     .validate(name, { convert: false })

//   return error || null
// }
// export function priceProductError(price) {
//   const { error } = productItemSchema
//     .extract('price')
//     .validate(price, { convert: false })

//   return error || null
// }
