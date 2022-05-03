import React from "react";
import details from './images/details.png';
import cart from './images/cart.png'

function Book({item}){
    return(
        <div key={item.id} className='book-item'>
          <img width="150" src={item.image} alt={item.title} />
          <span className='book-item-title'>{item.title}</span>
          <span className='book-item-price'>{item.price}</span>
          
          <button className='book-button'><img alt={"details"} src={details} width="16px" height={"16px"}></img>Detalhes</button>
          <button className='book-button'><img alt={"cart"} src={cart} width="16px" height={"16px"}></img>Comprar</button>
        </div>
    );
}

export default Book;