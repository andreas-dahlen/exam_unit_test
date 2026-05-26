import { getProductError, isCartItem, isProduct } from "../validation/validation.js"
// Examples of a valid product and a valid cart item. You may use these when testing below.
const correctProduct = {
	id: 1001,
	name: 'Badanka',
	price: 500
}

const correctCartList = [
	{
		id: 2,
		amount: 14,
		item: correctProduct
	},
	{
		id: 3253,
		amount: 3,
		item: correctProduct
	},
	{
		id: 6362,
		amount: 5,
		item: correctProduct
	},
]

const exampleWrongCartList = [
	{
		id: -5,
		amount: 14,
		item: correctProduct
	},
	{
		id: 3253,
		amount: -10,
		item: correctProduct
	},
	{
		id: 6362,
		amount: 5,
		item: {}
	},
]





// Group tests using "describe"
describe('Validation', () => {
	describe('Product tests', () => {

		it('returns true for a joi validated product', () => {
			expect(isProduct(correctProduct)).toBe(true)
		})

		describe('Data type tests', () => {
			it('returns false when id is not a number', () => {
				const badProduct = { ...correctProduct, id: 'abc' }
				expect(isProduct(badProduct)).toBe(false)
			})
			it('returns false when name is not a string', () => {
				const badProduct = { ...correctProduct, name: 123 }
				expect(isProduct(badProduct)).toBe(false)
			})
			it('returns false when price is not a number', () => {
				const badProduct = { ...correctProduct, price: 'abc' }
				expect(isProduct(badProduct)).toBe(false)
			})
			describe('Error message tests', () => {
				it('returns message when id is not positive', () => {
					const badProduct = { ...correctProduct, id: -123 }
					const error = getProductError(badProduct)
					expect(error.details[0].type).toBe('number.positive')
				})
				it('returns message when name is empty', () => {
					const badProduct = { ...correctProduct, name: '' }
					const error = getProductError(badProduct)
					expect(error.details[0].type).toBe('string.empty')
				})
				it('returns message when price is not an integer', () => {
					const badProduct = { ...correctProduct, price: 0.5 }
					const error = getProductError(badProduct)
					expect(error.details[0].type).toBe('number.integer')
				})
			})
		})
	})
	describe('Cart tests', () => {
		it('returns true if valid Cart list', () => {
			expect(isCartItem(correctCartList)).toBe(true)
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
