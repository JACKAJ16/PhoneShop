import React from 'react';
import './Header.css';
import { Link }  from 'react-router-dom';
import { connect } from 'react-redux';
import cart from '../../images/cart.svg';

const Header = ({ quantity }) => {
  
  //Total cart items quantity 
	const quantityTotal = quantity.reduce((a, b) => a + b.val, 0)

  return (
    <div className="header">
    	<div className="header__inner">
	      	<Link to='/' className="header__heading">Phone store</Link>
		      <div className="cart-btn">
		      	<Link to='/cart' className="header__heading"><img className="cart-logo"src={cart} alt="cart"/></Link>
		      	{quantityTotal > 0 ? <div className="cart-value">{quantityTotal}</div> : null}
		      </div>
    	</div>
    </div>
  );
}


const mapStateToProps = (state) => {
	return {
		quantity: state.quantity
	}
}

export default connect(mapStateToProps)(Header);
