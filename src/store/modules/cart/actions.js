

//única forma de acionar a mudança de estado (reducer)
// reducer escuta as ações

export const addBookToCart = (book)=>{
    return{
        //type é o cpf da action, nome deve ser único, em Maiúsculo
        //PADRÃO inicar com verrbo ADD, DELETE, etc...
        //payload é o que você está passando para o reducer
        type: 'ADD_BOOK_TO_CART',
        payload:{
            book
        }

    }
}

export const removeBook = () => {
    return {
      type: 'REMOVE_BOOK',
      payload: {
      }
    }
  }