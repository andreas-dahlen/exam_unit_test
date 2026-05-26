// importera här
import { addToCart, clearCart, getCartItemCount } from "../cart.js"
const correctProduct = {
	id: 1001,
	name: 'Badanka',
	price: 500
}

const correctCart = {
	id: 2001,
	amount: 1,
	item: correctProduct
}

describe('Cart', () => {
	beforeEach(() => {
		// Denna kod körs före varje test. Det är för att rensa kundvagnen, så inte saker ligger kvar från föregående test.
		// clearCart()
	})

	describe('clearCart', () => {
		it('succeeds if cart is empty', () => {
			addToCart(correctProduct)
			clearCart()
			expect(getCart().length).toBe(0)
		})
	})


	describe('addToCart', () => {
		it('returns false if invaid product', () => {
			const boolean = addToCart('clearly wrong')
			expect(boolean).toBe(false)
		})
		it('returns true if valid product', () => {
			const boolean = addToCart(correctProduct)
			expect(boolean).toBe(true)
		})
	})


	// describe('getCartItemCount', () => {
	// 	it('returns null if a valid count', () => {


	// 	})
	// })


	// -------------------------------------------------- //
	// Skriv dina testfall här

	// Du får ett test att börja med
	test('addToCart increments amount in cart', () => {
		const itemCountBefore = getCartItemCount()
		const input = { id: 1002, name: 'Vattenpistol', price: 40 }

		// addToCart returnerar inget - den påverkar kundvagnen
		// vi behöver använda getCartItemCount för att se om det har lagts till en ny produkt i kundvagnen
		addToCart(input)
		const itemCountAfter = getCartItemCount()

		expect(itemCountAfter).toBe(itemCountBefore + 1)
	})


	// -------------------------------------------------- //
})
