import React, { Fragment } from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/auth/login'
import Register from './pages/auth/register'
import Cart from './pages/cart'
import Checkout from './pages/checkout'
import Dashboard from './pages/dashboard'
import Product from './pages/product'
import Profile from './pages/profile'
import Search from './pages/search'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

import StoreProfile from './components/store.profile'
import EditProfile from './components/edit.profile'

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" index element={<Dashboard />} />
        <Route path="search" element={<Search />} />
        <Route path="cart" element={<Cart />} />
        <Route path="auth/signin" element={<Login />} />
        <Route path="auth/signup" element={<Register />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="product" element={<Product />} />
        <Route path="profile" element={<Profile />}>
          <Route
            path="edit"
            element={<EditProfile />}
          />
          <Route
            path="selling"
            element={<StoreProfile />}
          />
        </Route>
      </Routes>

      <ToastContainer />
    </Fragment>
  )
}

export default App
