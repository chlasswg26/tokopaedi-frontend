import React, { Fragment } from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/auth/login'
import Register from './pages/auth/register'
import Cart from './pages/cart'
import Checkout from './pages/checkout'
import Dashboard from './pages/dashboard'
import Product from './pages/product'
import Search from './pages/search'

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
        {/* <Route  */}
      </Routes>
    </Fragment>
  )
}

export default App
