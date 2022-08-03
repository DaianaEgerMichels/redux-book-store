import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Book from '../../components/Book';
import {addBookToCart} from '../../store/modules/cart/actions'

// import { Container } from './styles';

function Home() {

  const [books, setBooks] = useState([])
  //const [cart, setCart] = useState([])
  const dispatch = useDispatch();

  useEffect(() => {
    async function handleGetBooks(){
    axios
      .get('https://books-store-db.herokuapp.com/books')
      .then((response) => setBooks(response.data))
      .catch(() => alert('Desculpe ! Houve um erro ao tentar recuperar os livros.'))
    }
      handleGetBooks()
    }, [])

  const handleAddToCart = (book) => {
    dispatch(addBookToCart(book))
    //setCart([...cart, book])
  }

  return (
    <div className='container'>
      <div className='container-books'>

        {books.map(book => (
        <Book key={book.id} item ={book} addToCart={handleAddToCart}/>
      ))}
      </div>
    </div>
  );
}

export default Home;