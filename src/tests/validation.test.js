import { getCartError, getProductError, isCartItem, isProduct } from "../validation/validation.js"
// Examples of a valid product and a valid cart item. You may use these when testing below.
const correctProduct = {
	productId: 1001,
	name: 'Badanka',
	price: 500
}

const correctCart = {
	cartId: 2001,
	amount: 1,
	item: correctProduct
}

// Group tests using "describe"
describe('Validation', () => {
	describe('Product tests', () => {

		it('returns true for a validated product object', () => {
			expect(isProduct(correctProduct)).toBe(true)
		})
		it('returns true for an invalid product object', () => {
			expect(isProduct(undefined)).toBe(false)
		})

		describe('Data type tests', () => {
			it('returns false when id is a string', () => {
				const badProduct = { ...correctProduct, productId: 'abc' }
				expect(isProduct(badProduct)).toBe(false)
			})
			it('returns false when name is a number', () => {
				const badProduct = { ...correctProduct, name: 123 }
				expect(isProduct(badProduct)).toBe(false)
			})
			it('returns false when price is a string', () => {
				const badProduct = { ...correctProduct, price: 'abc' }
				expect(isProduct(badProduct)).toBe(false)
			})
		})
		describe('Error message tests', () => {
			it('returns error for productId when value is negative', () => {
				const badProduct = { ...correctProduct, productId: -123 }
				const error = getProductError(badProduct)
				expect(error.details[0].path).toEqual(['productId'])
			})
			it('returns error for name when value is empty string', () => {
				const badProduct = { ...correctProduct, name: '' }
				const error = getProductError(badProduct)
				expect(error.details[0].path).toEqual(['name'])
			})
			it('returns error for price when value is decimal', () => {
				const badProduct = { ...correctProduct, price: 0.5 }
				const error = getProductError(badProduct)
				expect(error.details[0].path).toEqual(['price'])
			})
		})
	})
	describe('Cart tests', () => {
		it('returns true for a valid cart object', () => {
			expect(isCartItem(correctCart)).toBe(true)
		})
		it('returns true for an invalid cart object', () => {
			expect(isCartItem(undefined)).toBe(false)
		})

		describe('Data type tests', () => {
			it('returns false when cartId value is a string', () => {
				const badCart = { ...correctCart, cartId: 'abc' }
				expect(isCartItem(badCart)).toBe(false)
			})
			it('returns false when amount value is undefined', () => {
				const badCart = { ...correctCart, amount: undefined }
				expect(isCartItem(badCart)).toBe(false)
			})
			it('returns false when item value is null', () => {
				const badCart = { ...correctCart, item: null }
				expect(isCartItem(badCart)).toBe(false)
			})
		})

		describe('Error message tests', () => {

			it('returns error for cartId when value is null', () => {
				const badCart = { ...correctCart, cartId: null }
				const error = getCartError(badCart)
				expect(error.details[0].path).toEqual(['cartId'])
			})

			it('returns error for amount when value is 0', () => {
				const badCart = { ...correctCart, amount: 0 }
				const error = getCartError(badCart)
				expect(error.details[0].path).toEqual(['amount'])
			})

			it('returns error for item when value is undefined', () => {
				const badCart = { ...correctCart, item: undefined }
				const error = getCartError(badCart)
				expect(error.details[0].path).toEqual(['item'])
			})
		})
	})
})

// describe('id validation', () => {
// 	it('returns error.id for incorrect product id', () => {
// 		const
// 	})
//fel data typ... och ett annat fel..


//positive, whole number, not 0, not empty

// Använd en "test" eller "it" (de är synonymer) för varje testfall
/* Exempel på syntax:
test('beskriv testfallet', () => {
	// här skriver du testkoden
	// avsluta alltid med "expect"
})
*/



// ---------------------------------------------
// Följande testfall ska du implementera. Det är tillåtet att använda Joi. Gör i så fall ett schema för varje sorts objekt du vill kunna validera. Du får även ändra texten om du vill skriva på svenska i stället för engelska.
// (Ta bort dessa kommentarer när du är klar)

// 1. it returns true for a valid cart object

// 2. it returns false for invalid cart objects
//invalid in what ways? add cases!

// 3. it returns true for a valid product
// 4. it returns false for invalid cart objects
//invalid in what ways? add cases!
