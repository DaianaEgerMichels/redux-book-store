import React from "react";
import details from './images/details.png';
import cart from './images/cart.png';
import { priceFormat } from '../../utils/priceFormat';
import { useNavigate} from 'react-router-dom';

function Book({item, addToCart}){

  const navigate = useNavigate();
  const priceFormatted = priceFormat(item.price)

    return(
        <div key={item.id} className='book-item'>
          <img width="150" src={item.image} alt={item.title} />
          <span className='book-item-title'>{item.title}</span>
          <span className='book-item-price'>{priceFormatted}</span>
          
          <button className='book-button' onClick={() => navigate('/detalhes', {state: item} )} ><img alt={"details"} src={details} width="16px" height={"16px"}></img>Detalhes</button>
          <button className='book-button'onClick={()=> addToCart(item)}><img alt={"cart"} src={cart} width="16px" height={"16px"}></img>Comprar</button>
        </div>
    );
}

export default Book;