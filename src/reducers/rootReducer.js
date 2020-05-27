const initState = {
	cart: [],
	quantity: [],
	total: [],
	isModalClicked: false
}

const rootReducer = (state = initState, action) => {

	if(action.type === "ADD_ITEM") {
		return {
			...state, 
			cart: [...state.cart, action.id],
			quantity: [...state.quantity, {id: action.id, val: 1, total: action.price}],
			isModalClicked: true
		}
	}
	
	if(action.type === "DELETE_ITEM") {
		let arr = state.cart.filter(val => val !== action.id);
		let arr2 = state.quantity.filter(val => val.id !== action.id);

		return {
			...state, 
			cart: arr,
			quantity: arr2
			
		}
	}
	
	if(action.type === "ADD_QUANTITY") {
		return {
			...state,
			quantity: state.quantity.map((item, index) => {
    		if(item.id === action.id) {
      		return {
       		...item,  
        	val: item.val + 1,
        	total: item.total + action.price  
      	}
    	}
    	return item;
  	})
	}
}


	if(action.type === "REMOVE_QUANTITY") {
		return {
			...state,
			quantity: state.quantity.map((item, index) => {
    		if(item.id === action.id) {
      		return {
       		...item,  
        	val: item.val - 1,
        	total: item.total - action.price  
      	}
    	}
    	return item;
  	})
	}
}

	if(action.type === "CLEAR_CART") {
		return {
			...state, 
			cart: state.cart.filter(item => item === 0),
			quantity: state.quantity.filter(item => item === 0)			
		}
	}

	if(action.type === "OPEN_MODAL") {
		return {
			...state, 
			isModalClicked: true	
		}
	}

	if(action.type === "CLOSE_MODAL") {
		return {
			...state, 
			isModalClicked: false	
		}
	}

	return state
}

export default rootReducer;