import React from 'react'
import { Routes, Route } from "react-router"
import Home from './screens/Home'
import Signup from './screens/Signup'
import Login from './screens/Login'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default App