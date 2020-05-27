import React from 'react';
import { connect } from 'react-redux';
import {storeProducts as data} from '../../data/data';
import PaypalButton from '../PaypalButton/PaypalButton';
import EmptyCart from './EmptyCart/EmptyCart';
import { deleteItem, addQuantity, removeQuantity, clearCart } from '../../actions/cartActions';
import './Cart.css';
import { Link } from 'react-router-dom';

const Cart = ({ deleteItem, addQuantity, removeQuantity, clearCart, cart, quantity }) => {
	
	//Delete item from cart method
	const handleDelete = (e) => {
		deleteItem(+e.target.id)		
	}
	
	//Increasing item quantity in the cart method
	const increaseQuantity = (e) => {
		addQuantity(+e.target.id, +e.target.value)		
	}
	
	//Decreasing item quantity in the cart method
	const decreaseQuantity = (e) => {
		removeQuantity(+e.target.id, +e.target.value)		
	}
	
	//Deleting all items from the cart method
	const deleteCart = (e) => {
		clearCart()
	}
	
	//Total cart price 	
	const cartTotal = quantity.reduce((a, b) => a + b.total, 0)
	
	return (
		<div>
			{cartTotal > 0 ? 
				<div>    	
					<h1 className="cart__heading">Cart</h1>
					{data.filter(val => val.id === cart.find(b => b === val.id)).map(item => 
						<div key={item.id} className="cart__item">
							<div className="cart__item__inner">
								<div>
									<img className="cart-img" src={item.img} alt="item" />
								</div>
								<div className="cart__info-container">
									<Link to={{pathname: '/details', state: {item: item}}} className="cart-item-title">{item.title}</Link>
									<p className="cart-item-price">${item.price}</p>
								</div>
								<div className="cart__btn-container">
									<div className="cart__btn-container__inner">
										<button className="decrease-btn" id={item.id} value={item.price} disabled={quantity.find(val => val.id === item.id).val < 2 ? true : null } onClick={decreaseQuantity} /> 
										<p className="cart__item-quantity">{quantity.find(val => val.id === item.id).val}</p>
										<button className="increase-btn" id={item.id} value={item.price} disabled={quantity.find(val => val.id === item.id).val > 98 ? true : null } onClick={increaseQuantity} />
									</div>	
									<div className="cart__item-total">
										<p>${quantity.find(val => val.id === item.id).total}</p>
									</div>
								</div>
								<button className="cart__delete-item-btn" id={item.id} onClick={handleDelete} />
							</div>
						</div>)}
					<div className="cart__footer">
						<button className="clear-cart-btn" onClick={deleteCart}>Clear cart</button>	
						<div className="purchuase-container">
							<p className="cart__total">Total: ${cartTotal}</p>
							<PaypalButton total={cartTotal}/> 		
						</div>
					</div>	
				</div>
				: <EmptyCart />}
			</div> 
			);
		}

const mapStateToProps = (state) => {
	return {
		cart: state.cart,
		quantity: state.quantity
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		deleteItem: (id) => { dispatch(deleteItem(id)) },
		addQuantity: (id, price) => { dispatch(addQuantity(id, price)) },
		removeQuantity: (id, price) => { dispatch(removeQuantity(id, price)) },
		clearCart: () => { dispatch(clearCart()) }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
