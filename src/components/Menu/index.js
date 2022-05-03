import React from 'react';
import cartbuy from './images/cart-buy.png'

// import { Container } from './styles';

function Menu() {
  return( 
    <div className='menu-container'>
        <h1>Book Store</h1>
        <span><img alt={"cart-buy"} src={cartbuy} width="16px" height={"16px"}></img>Shopping Cart</span>
    </div>
  );
}

export default Menu;