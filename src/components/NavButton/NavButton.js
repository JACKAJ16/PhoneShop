import React from 'react';
import './NavButton.css';
import { Link } from 'react-router-dom';

const NavButton = ({ pathname, onClick }) => {
	return (
		<Link onClick={onClick}
          className="to-shop"
          to={pathname === '/details' ? '/' : '/cart'}>
          {pathname === '/details' ? 'To shop' : 'To cart'}
    </Link>	
		)
}


export default NavButton


