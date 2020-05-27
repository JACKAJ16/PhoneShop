import React from 'react';
import {storeProducts as data} from '../../data/data';
import Item from './Item/Item';
import './ItemsList.css';

const ItemsList = () => (
    <div className="items-list">
    	<div className="items-list__inner">
     		{data.map(item => <Item key={item.id} item={item} />)} 
     	</div>
    </div>
  );

export default ItemsList;
