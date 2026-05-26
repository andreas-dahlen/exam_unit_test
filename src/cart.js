/*
Din uppgift:
- skriv testfall för alla funktionerna nedan i cart.test.js (RED)
- skriv kod här för att implementera funktionerna (GREEN)

Tips:
- börja med att identifiera VAD som ska testas.
- om du testar t.ex. removeFromCart får du använda addToCart i början av testet. Den kommer nämligen ha sina egna tester

*/
// function getCartItemCount()
// function getItem(index)
// function getTotalCartValue()
// function addToCart(newItem)
// function removeFromCart(itemId)
// function editCart(itemId, newValues)
// function clearCart()
// -------------------------------------------------- //

import { isCartItem, isProduct } from "./validation/validation.js"

let cart = []
let idCounter = 2002
// -------------------------------------------------- //


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


function getCart() {
	return [...cart]
}

function getCartItemCount() {
	return idCounter
}

function editCart(itemId, newValues) {

}

function removeFromCart(itemId) {
	const index = cart.findIndex(item => item.cartId === itemId)
	if (index === -1) return false

	if (cart[index].amount === 1) {
		cart.splice(index, 1)
	} else {
		cart[index].amount--
	}
	return true
}

/**
 * Lägger till en "product" till kundvagnen.
 * @returns true om produkten lades till, false om parametern inte är ett korrekt objekt
 */
function addToCart(newItem) {
	if (!isProduct(newItem)) return false
	const index = cart.findIndex(ci => ci.item.productId === newItem.productId)
	if (index === -1) {
		const cartItem = { cartId: newItem.productId, amount: 1, item: newItem }
		idCounter++
		cart.push(cartItem)
	} else {
		cart[index].amount++
	}
	return true
}


function clearCart() {
	cart = []
}



export { getCartItemCount, addToCart, clearCart, getCart, getItem, getTotalCartValue, removeFromCart }
