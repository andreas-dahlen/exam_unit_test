// importera här
import { addToCart, clearCart, editCart, getCart, getCartItemCount, getItem, getTotalCartValue, removeFromCart } from "../cart.js"
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
		it('empties the cart', () => {
			addToCart(correctProduct)
			clearCart()
			expect(getCartItemCount()).toBe(0)
		})
	}) //not sure what else to test here xD


	describe('addToCart', () => {
		it('returns false when product is invaid', () => {
			const boolean = addToCart('clearly wrong')
			expect(boolean).toBe(false)
		})
		it('returns true when product is valid', () => {
			const boolean = addToCart(correctProduct)
			expect(boolean).toBe(true)
		})

		it('does not add invalid products to cart', () => {
			const before = getCart()
			const badProduct = { ...correctProduct, id: undefined }
			addToCart(badProduct)
			expect(getCart()).toEqual(before)
		})
		it('increments cart count when product is added', () => {
			const before = getCartItemCount()
			addToCart(correctProduct)
			expect(getCartItemCount()).toBe(before + 1)
		})
	})

	describe('getItem', () => {
		it('returns matching cart item when it exists', () => {
			addToCart(correctProduct)
			const expected = { cartId: correctProduct.productId, amount: 1, item: correctProduct }

			expect(getItem(0)).toEqual(expected)
		})
		it('returns null when item index does not exist', () => {
			expect(getItem(42)).toBe(null)
		})
	})

	describe('getTotalCartValue', () => {
		it('calculates total cart value correctly', () => {
			addToCart(correctProduct)
			addToCart(correctProduct)
			addToCart(correctProduct)
			const expected = correctProduct.price * 3
			expect(getTotalCartValue()).toEqual(expected)
		})
		it('returns 0 when cart is empty', () => {
			expect(getTotalCartValue()).toEqual(0)
		})
	})

	describe('removeFromCart', () => {
		it('reduces item quantity when product is removed', () => {
			const expected = getCartItemCount()
			addToCart(correctProduct)
			removeFromCart(correctProduct.productId)

			expect(getCartItemCount()).toEqual(expected)
		})
		it('decreases cart count when item is removed', () => {
			const expected = getCartItemCount()
			addToCart(correctProduct)
			addToCart(correctProduct)
			addToCart(correctProduct)
			removeFromCart(correctProduct.productId)

			expect(getCartItemCount()).toBe(expected + 2)
		})
	})

	describe('editCart', () => {
		it('updates cart item when valid changes are applied', () => {
			addToCart(correctProduct)
			const expected = {
				productId: 42,
				name: 'CHANGED',
				price: 42
			}
			editCart(correctProduct.productId, expected)
			expect(getItem(0).item).toEqual(expected)
		})

		it('ignores invalid updates to cart item', () => {
			addToCart(correctProduct)
			const changes = {
				productId: "wrong",
				name: 53,
				price: "wrong"
			}

			editCart(correctProduct.productId, changes)
			expect(getItem(0).item).toEqual(correctProduct)
		})
	})
})
