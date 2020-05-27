import React, { useEffect, useRef } from 'react';
import './Modal.css';
import { connect } from 'react-redux';
import { storeProducts as data } from '../../data/data';
import { closeModal } from '../../actions/modalActions';
import { deleteItem } from '../../actions/cartActions';
import PaypalButton from '../PaypalButton/PaypalButton';
import NavButton from '../NavButton/NavButton';

const Modal = ({ quantity, closeModal, isModalClicked, cart, deleteItem }) => {
  
  //Total value for modal window
	const modalTotal = quantity.reduce((a, b) => a + b.total, 0);
	const node = useRef();
	
  //Closing modal window method for modal
	const handleClickOutside = e => {
		if (node.current.contains(e.target)) {
			return;
		}
    closeModal();
  };
  
  //Close modal button method
  const handleClose = () => {
  	closeModal();
  }

  //Hook for tracking clicking outside modal window and closing it
  useEffect(() => {
  	if (isModalClicked) {
  		document.addEventListener("mousedown", handleClickOutside);
  	} 

  	return () => {
  		document.removeEventListener("mousedown", handleClickOutside);
  	};
  }, [isModalClicked]);




  return (
  	<div className={(isModalClicked && cart[0]) ? 'modal' : 'modal-off'}>
	  	<div ref={node} className="modal__inner">
		  	<div className="modal__header">
		  		<button className="close-modal-btn" onClick={handleClose}></button>
		  	</div>	 
		  	<div className="modal__item-container">
			  	{isModalClicked ? data.filter(item => item.id === cart.find(a => a === item.id)).map((el) => {
			  		return (
			  			<div key={el.id} className="modal__item">
				  			<div>
				  				<img className="modal__img" src={el.img} alt="item"/>
				  			</div>
				  			<div>
					  			<p className="modal__item-title">{el.title}</p>
					  			<p className="modal__item-price">${el.price}</p>
				  			</div>
				  			<div>
				  				<button className="modal__delete-item-btn" onClick={(id) => deleteItem(el.id)}></button>
				  			</div>
			  			</div>

			  			)
			  	}) : null}

		  	</div>
		  	<div className="modal__footer">
			  	<div>
			  		<PaypalButton total={modalTotal}/>	
			  	</div>	
			  	<div className="modal__footer-total">
			  		Total: ${modalTotal}
			  	</div>
			  	<div>
			  		<NavButton onClick={closeModal}/>
			  	</div>	
		  	</div>
	  	</div>
  	</div>  
  );
}

const mapStateToProps = (state) => {
	return {
		cart: state.cart,
		isModalClicked: state.isModalClicked,
		quantity: state.quantity
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		closeModal: () => { dispatch(closeModal()) },
		deleteItem: (id) => { dispatch(deleteItem(id)) }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
