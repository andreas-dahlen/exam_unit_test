import { cartItemSchema, productItemSchema } from './joiValidation'

export function isCartItem(maybeCartItem) {
  const { error } = cartItemSchema.validate(
    maybeCartItem,
    {
      abortEarly: false,
      convert: false
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

export function getCartError(maybeProduct) {
  const { error } = cartItemSchema.validate(
    maybeProduct,
    {
      abortEarly: false,
      convert: false
    }
  )
  return error || null
}