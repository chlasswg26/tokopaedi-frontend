import React, { Fragment } from 'react'
import { Routes, Route } from 'react-router-dom'
import Cart from './pages/cart'
import Dashboard from './pages/dashboard'
import Search from './pages/search'

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" index element={<Dashboard />} />
        <Route path="search" element={<Search />} />
        <Route path="cart" element={<Cart />} />
        {/* <Route  */}
      </Routes>
    </Fragment>
  )
}

export default App
