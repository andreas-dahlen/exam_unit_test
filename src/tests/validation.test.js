import { isCartItem, isProduct } from "../validation/validation.js"
// Examples of a valid product and a valid cart item. You may use these when testing below.
const correctProduct = {
	id: 1001,
	name: 'Badanka',
	price: 500
}

// const exampleCartObject = {
// 	id: 2001,
// 	amount: 1,
// 	item: exampleProduct
// }



const exampleCartList = [
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

	it('returns true for a joi validated product', () => {
		expect(isProduct(correctProduct)).toBe(true)
	})

	// describe('id validation', () => {
	// 	it('returns error.id for incorrect product id', () => {
	// 		const
	// 	})

})

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
