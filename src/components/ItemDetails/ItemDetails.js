import React from 'react';
import {storeProducts as data} from '../../data/data';
import AddToCartButton from '../AddToCartButton/AddToCartButton';
import './ItemDetails.css';
import NavButton from '../NavButton/NavButton';


const ItemDetails = ({ location }) => {
	
  return (
    <div className="item-details">
	    <div className="item-details__inner">
	    	<div>
	    		<img className="item-details__img" src={data[location.state.item.id - 1].img} alt="item"/>
	    	</div>
	    	<div className="item-details__info-container">	
					<p className="item-details__title">{data[location.state.item.id - 1].title}</p>
					<span className="item-details__description">Description:</span>
					<p className="item-details__info">{data[location.state.item.id - 1].info}</p>	
					<p className="item-details__price">Price: ${data[location.state.item.id - 1].price}</p>				
					<div className="item-details__buttons-container">
						<AddToCartButton item={location.state.item}/>
						<NavButton pathname={location.pathname} />
					</div>
				</div>
			</div>	
    </div>
  );
}

export default ItemDetails;
