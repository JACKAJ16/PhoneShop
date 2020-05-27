export const deleteItem = (id) =>  {
	return {
		type: "DELETE_ITEM",
		id
	}
}

export const addQuantity = (id, price) => {
	return {
		type: "ADD_QUANTITY", 
		id, 
		price
	}
}

export const removeQuantity = (id, price) => {
	return {
		type: "REMOVE_QUANTITY", 
		id, 
		price
	}
}

export const clearCart = () => {
	return {
		type: "CLEAR_CART"
	}
}

export const addItem = (id, price) => {
	return {
		type: "ADD_ITEM",
		id,
		price
	}
}