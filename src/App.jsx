import React, { Fragment } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useDocumentTitle } from '@mantine/hooks'

import Login from './pages/auth/login'
import Register from './pages/auth/register'
import Cart from './pages/cart'
import Checkout from './pages/checkout'
import Dashboard from './pages/dashboard'
import Product from './pages/product'
import Profile from './pages/profile'
import Search from './pages/search'

import StoreProfile from './components/store.profile'
import EditProfile from './components/edit.profile'

import { PublicRoute } from './routers/PublicRoute'
import { PrivateRoute } from './routers/PrivateAuth'
import { useSelector } from 'react-redux'
import ProductList from './components/product.list'
import CategoryProfile from './components/category.profile'
import OrderList from './components/order.list'

const REACT_APP_NAME = import.meta.env.VITE_APP_TITLE

const App = () => {
  useDocumentTitle(REACT_APP_NAME)

  const profile = useSelector(state => state.profile.get)

  return (
    <Fragment>
      <Routes>
        <Route path='/' index element={<Dashboard />} />
        <Route path='search' element={<Search />} />
        <Route path='cart' element={<Cart />} />
        <Route path='checkout' element={<Checkout />} />
        <Route path='product/:productId' element={<Product />} />
        <Route
          path='profile'
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        >
          <Route path='edit' element={<EditProfile />} />
          <Route path='transactions' element={<OrderList />} />
          {profile?.response?.role === 'seller' && (
            <Fragment>
              <Route path='products' element={<ProductList />} />
              <Route
                path='edit-product/:productId'
                element={<StoreProfile />}
              />
              <Route path='selling' element={<StoreProfile />} />
            </Fragment>
          )}
          {profile?.response?.role === 'admin' && (
            <Route path='categories' element={<CategoryProfile />} />
          )}
        </Route>
        <Route
          path='/auth'
          element={
            <PublicRoute>
              <Navigate to='/auth/signin' replace={true} />
            </PublicRoute>
          }
        />
        <Route
          path='/auth/signin'
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path='/auth/signup'
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
      </Routes>
    </Fragment>
  )
}

export default App
