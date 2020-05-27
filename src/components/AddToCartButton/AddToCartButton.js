import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../actions/cartActions';
import { openModal } from '../../actions/modalActions';
import './AddToCartButton.css';

const AddToCartButton = ({ cart, item, openModal, addItem }) => {
  
  const handleClick = () => {
  		cart.find(val => val === item.id) ? openModal() : addItem(item.id, item.price)
  }

  return (
    <div>
    	<button className="to-cart-btn" onClick={handleClick}>
        {cart.find(val => val === item.id) ? 'In cart' : 'Add to cart'}
    	</button>
    </div>
  );
}

const mapStateToProps = (state) => {
	return {
		cart: state.cart
	}
}

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (id, price) => { dispatch(addItem(id, price)) },
    openModal: () => { dispatch(openModal()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddToCartButton);














