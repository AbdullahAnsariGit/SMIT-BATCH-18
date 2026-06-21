import React from 'react'
import { Routes, Route, useNavigate, Navigate, Link } from "react-router-dom"

// Way 1

// import Login from '../screens/auth/login'
// import About from '../screens/app/about'
// import ContactUs from '../screens/app/contact-us'
// import Admin from '../screens/app/admin'
// import Signup from '../screens/auth/signup'
// import Home from '../screens/app/home'
// import ErrorPage from '../screens/error/error-page'

// Way 2
import { Login, Signup } from '../screens/auth'
import { Home, Admin, ErrorPage, About, ContactUs } from '../screens/app'

// Way 3
// import * as AbdullahNavigation from '../screens/auth'



function Routing() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<ErrorPage />} />
            <Route path="/contact-us" element={<ContactUs />} />
        </Routes>

    )
}
export default Routing