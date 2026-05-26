// importera här
import { addToCart, clearCart, getCart, getCartItemCount } from "../cart.js"
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

describe('Cart', () => {
	beforeEach(() => {
		// Denna kod körs före varje test. Det är för att rensa kundvagnen, så inte saker ligger kvar från föregående test.
		clearCart()
	})

	describe('clearCart', () => {
		it('succeeds if cart is empty', () => {
			addToCart(correctProduct)
			clearCart()
			expect(getCart().length).toBe(0)
		})
	}) //not sure what else to test here xD


	describe('addToCart', () => {
		it('returns false if invaid product', () => {
			const boolean = addToCart('clearly wrong')
			expect(boolean).toBe(false)
		})
		it('returns true if valid product', () => {
			const boolean = addToCart(correctProduct)
			expect(boolean).toBe(true)
		})

		it('succeeds if cart stays the same', () => {
			const before = getCart()
			const badProduct = { ...correctProduct, id: undefined }
			addToCart(badProduct)
			expect(getCart()).toEqual(before)
		})
		it('succeeds if cart is changed', () => {
			const before = getCart()
			addToCart(correctProduct)
			expect(getCart()).not.toEqual(before)
		})
	})


	// describe('getCartItemCount', () => {
	// 	it('returns null if a valid count', () => {


	// 	})
	// })


	// -------------------------------------------------- //
	// Skriv dina testfall här

	// Du får ett test att börja med
	describe('getCartItemCount', () => {
		test('increments amount in cart', () => {
			const itemCountBefore = getCartItemCount()
			addToCart(correctProduct)
			const itemCountAfter = getCartItemCount()

			expect(itemCountAfter).toBe(itemCountBefore + 1)
		})
	})


	// -------------------------------------------------- //
})
