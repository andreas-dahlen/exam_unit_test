import { isCartItem, isProduct } from "./validation/validation.js"

let cart = []
let counter = 0
// -------------------------------------------------- //

function clearCart() {
	counter = 0
	cart = []
}

function getCart() {
	return [...cart]
}

/** Gets an item from cart */
function getItem(index) {
	const cartItem = cart[index]
	if (!isCartItem(cartItem)) return null
	return cartItem
}

function getTotalCartValue() {
	return cart.reduce((total, currentItem) => {
		return total + (currentItem.item.price * currentItem.amount)
	}, 0)
}

function getCartItemCount() {
	return counter
}

function addToCart(newItem) {
	if (!isProduct(newItem)) return false
	const index = cart.findIndex(ci => ci.item.productId === newItem.productId)
	if (index === -1) {
		const cartItem = { cartId: newItem.productId, amount: 1, item: newItem }
		cart.push(cartItem)
	} else {
		cart[index].amount++
	}
	counter++
	return true
}

function removeFromCart(itemId) {
	const index = cart.findIndex(item => item.cartId === itemId)
	if (index === -1) {
		throw new Error('Item not found, cannot be removed')
	}

	if (cart[index].amount === 1) {
		cart.splice(index, 1)
	} else {
		cart[index].amount--
	}
	counter--
	return true
}

function editCart(itemId, newValues) {
	if (!isProduct(newValues)) return false
	const index = cart.findIndex(item => item.cartId === itemId)

	if (index === -1) {
		throw new Error('Item not found, cannot be edited')
	}

	cart[index].item = {
		...cart[index].item,
		...newValues
	}

	return true
}

export { getCartItemCount, addToCart, clearCart, getCart, getItem, getTotalCartValue, removeFromCart, editCart }
