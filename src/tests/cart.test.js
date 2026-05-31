import { addToCart, clearCart, editCart, getCart, getCartItemCount, getItem, getTotalCartValue, removeFromCart } from "../cart.js"

const correctProduct = {
	productId: 1001,
	name: 'Badanka',
	price: 500
}

describe('Cart', () => {
	beforeEach(() => {
		clearCart()
	})

	describe('clearCart', () => {
		it('empties the cart', () => {
			addToCart(correctProduct)
			clearCart()
			expect(getCart().length).toBe(0)
		})
	})

	describe('getItem', () => {
		it('returns matching cart item when it exists', () => {
			addToCart(correctProduct)
			const expected = { cartId: correctProduct.productId, amount: 1, item: correctProduct }

			expect(getItem(0)).toStrictEqual(expected)
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
			expect(getTotalCartValue()).toBe(0)
		})
	})

	describe('getCartItemCount', () => {
		it('increases after adding to amount', () => {
			addToCart(correctProduct)
			addToCart(correctProduct)

			expect(getCartItemCount()).toBe(2)
		})

		it('increases after adding item', () => {
			addToCart(correctProduct)
			addToCart({ ...correctProduct, productId: 43 })

			expect(getCartItemCount()).toBe(2)
		})

		it('decreases after removing from amount', () => {
			addToCart(correctProduct)
			addToCart(correctProduct)
			addToCart(correctProduct)
			removeFromCart(correctProduct.productId)

			expect(getCartItemCount()).toBe(2)
		})

		it('decreases after removing item', () => {
			addToCart(correctProduct)
			addToCart({ ...correctProduct, productId: 43 })
			removeFromCart(correctProduct.productId)

			expect(getCartItemCount()).toBe(1)
		})

		it('stays at zero after removing item when cart is zero', () => {
			expect(() =>
				removeFromCart(correctProduct.productId)
			).toThrow()

			expect(getCartItemCount()).toBe(0)
		})

		it('does not change cart count after editing item', () => {
			addToCart(correctProduct)
			editCart(correctProduct.productId, { productId: 344, name: 'CHANGED', price: 52 })
			expect(getCartItemCount()).toBe(1)
		})
	})

	describe('addToCart', () => {
		it('returns false when product is NOT added', () => {
			const boolean = addToCart('clearly wrong')
			expect(boolean).toBe(false)
		})
		it('returns true when product is added', () => {
			const boolean = addToCart(correctProduct)
			expect(boolean).toBe(true)
		})

		it('does not add invalid products to cart', () => {
			const before = getCart()
			const badProduct = { ...correctProduct, id: undefined }
			addToCart(badProduct)
			expect(getCart()).toEqual(before)
		})
		it('increments cart length when product is added', () => {
			addToCart(correctProduct)
			expect(getCart().length).toBe(1)
		})
	})

	describe('removeFromCart', () => {
		it('returns true on successful removal', () => {
			addToCart(correctProduct)
			const actual = removeFromCart(correctProduct.productId)
			expect(actual).toBe(true)
		})

		it('reduces cart length when product is removed', () => {
			addToCart(correctProduct)
			removeFromCart(correctProduct.productId)

			expect(getCart().length).toBe(0)
		})
		it('cart contents are correct after an item is removed', () => {
			addToCart(correctProduct)
			addToCart({ ...correctProduct, productId: 2543 })
			removeFromCart(2543)
			expect(getCart()).toStrictEqual([{ cartId: correctProduct.productId, amount: 1, item: correctProduct }])
		})
		it('throws error when item does not exist', () => {
			expect(() =>
				removeFromCart(correctProduct.productId)
			).toThrow()
		})
	})

	describe('editCart', () => {
		it('returns true on successful edit', () => {
			addToCart(correctProduct)
			const actual = editCart(correctProduct.productId, { productId: 344, name: 'CHANGED', price: 52 })
			expect(actual).toBe(true)
		})

		it('updates cart item when valid changes are applied', () => {
			addToCart(correctProduct)
			const expected = {
				productId: 42,
				name: 'CHANGED',
				price: 42
			}
			editCart(correctProduct.productId, expected)
			expect(getItem(0).item).toStrictEqual(expected)
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

		it('throws error when item does not exist', () => {
			expect(() =>
				editCart(correctProduct.productId, correctProduct)
			).toThrow()
		})
	})
})
