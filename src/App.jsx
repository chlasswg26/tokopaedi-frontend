import React, { Fragment } from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/dashboard'

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route index element={<Dashboard />} />
      </Routes>
    </Fragment>
  )
}

export default App
