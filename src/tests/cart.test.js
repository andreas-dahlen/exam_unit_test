// importera här
import { addToCart, clearCart, getCart, getCartItemCount, getItem, getTotalCartValue, removeFromCart } from "../cart.js"
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
			expect(getCart().length).toEqual(before.length + 1)
		})
	}) //not much else to do here...

	describe('getCartItemCount', () => {
		test('succeeds if count increments', () => {
			const itemCountBefore = getCartItemCount()
			addToCart(correctProduct)
			const itemCountAfter = getCartItemCount()

			expect(itemCountAfter).toBe(itemCountBefore + 1)
		})
	}) //kind of useless xD

	describe('getItem', () => {
		test('succeeds if cartItem equals the added product', () => {
			addToCart(correctProduct)
			const expected = { cartId: correctProduct.productId, amount: 1, item: correctProduct }

			expect(getItem(0)).toEqual(expected)
		})
		test('succeeds if it does return null', () => {
			expect(getItem(999)).toBe(null)
		})
	})

	describe('getTotalCartValue', () => {
		test('succeeds if returns correct value', () => {
			addToCart(correctProduct)
			addToCart(correctProduct)
			addToCart(correctProduct)
			const expected = correctProduct.price * 3
			expect(getTotalCartValue()).toEqual(expected)
		})
		test('succeeds if returns 0', () => {
			expect(getTotalCartValue()).toEqual(0)
		})
	})

	describe('removeFromCart', () => {
		test('succeeds if cart is empty', () => {
			addToCart(correctProduct)
			removeFromCart(correctProduct.productId)

			expect(getCart().length).toEqual(0)
		})
		test('succeeds if amount is reduced', () => {
			addToCart(correctProduct)
			addToCart(correctProduct)
			addToCart(correctProduct)
			removeFromCart(correctProduct.productId)

			const actual = getItem(0).amount

			expect(actual).toBe(2)
		})
	})
})
