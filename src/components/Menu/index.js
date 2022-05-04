import React from 'react';
import cartbuy from './images/cart-buy.png';
import { useNavigate} from 'react-router-dom';
import { useSelector } from 'react-redux';

// import { Container } from './styles';

function Menu() {
  const navigate = useNavigate();
  
  const cart = useSelector(state => state.cart)

  return( 
    <div className='menu-container'>
        <h1 onClick={()=> navigate('/')}>Book Store</h1>
        <span onClick={()=> navigate('carrinho')}><img alt={"cart-buy"} src={cartbuy} width="16px" height={"16px"}></img>{cart.items.length}</span>
    </div>
  );
}

export default Menu;