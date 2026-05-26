import { productItemSchema } from './joiValidation'


// Remember to use RED, GREEN, REFACTOR
// 1. pick one test case in validation.test.js
// 2. write the code, verify that the test is RED
// 3. write code in this file so that the test case becomes GREEN
// 4. refactor as neccessary before you move on to the next
// 5. repeat

export function isCartItem(maybeCartItem) { }

export function isProduct(maybeProduct) {
  const { error } = productItemSchema.validate(
    maybeProduct,
    { abortEarly: false }
  )

  return !error
}
