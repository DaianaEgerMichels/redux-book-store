

//recebe como parâmetro: um estado e uma ação
//função reducer
//criada para cada estado
//sempre irá retornar o estado original dela

const INITIAL_STATE = {
    items: []
}

const cart = (state = INITIAL_STATE, action)=>{

    switch(action.type) {
        case 'ADD_BOOK_TO_CART' : {
          return {
            items: [
              ...state.items,
              action.payload.book
            ] 
          }
        }
    
        default: 
            return state
      }
}

export default cart;