import { legacy_createStore as createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import cart from './modules/cart/reducer'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: '@book_store_19970923',
  storage,
  whitelist: ['cart']
}

const reducers = combineReducers({
  cart
})

const persistedReducer = persistReducer(persistConfig, reducers)

const store = createStore(persistedReducer)

const persistor = persistStore(store)

export {store, persistor}