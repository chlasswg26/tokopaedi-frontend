import { combineReducers } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import auth from './auth'
import cart from './cart'
import category from './category'
import product from './product'
import profile from './profile'
import transaction from './transaction'
import user from './user'

const customPersistCart = {
  key: 'cart',
  storage
}

const appReducer = combineReducers({
  auth,
  cart: persistReducer(
    customPersistCart,
    cart
  ),
  category,
  product,
  profile,
  transaction,
  user
})

const rootReducer = (state, action) => {
  if (action.type === 'logout/auth/fulfilled') {
    state = {}
    localStorage.clear()
  }

  return appReducer(state, action)
}

export default rootReducer
