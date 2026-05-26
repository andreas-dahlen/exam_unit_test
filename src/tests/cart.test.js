// importera här
import { addToCart, getCartItemCount } from "../cart"


describe('Cart', () => {
	beforeEach(() => {
		// Denna kod körs före varje test. Det är för att rensa kundvagnen, så inte saker ligger kvar från föregående test.
		clearCart()
	})

	describe('addToCart', () => {
		it('returns false if invaid product', () => {
			const boolean = addToCart('clearly wrong')
			expect(boolean).toBe(false)
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
