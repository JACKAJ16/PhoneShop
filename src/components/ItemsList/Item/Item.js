import React from 'react';
import { Link } from 'react-router-dom';
import AddToCartButton from '../../AddToCartButton/AddToCartButton';
import './Item.css';

const Item = ({ item }) => (
    <div className="item">
    	<Link to={{pathname:'/details', state: {item}}} >
    		<img className="item__img"src={item.img} alt="item"/> 
    	</Link>
    	<p className="item__paragraph">{item.title}</p>
    	<p className="item__paragraph">${item.price}</p>
			<AddToCartButton item={item}/>
    </div>
  );

export default Item;
