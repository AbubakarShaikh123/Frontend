import React from 'react'

import { Router, Routes, Route } from 'react-router-dom'
import {About, Contact, Home, Login, Products, ProductInfo, Register, Cart, Checkout} from '../pages/index.js'

function Routing() {
  return (
    <>
        <Routes>
            <Route path='https://frontend-jjo0sb87j-abubakars-projects-8fcb8a81.vercel.app/'  element={<Home/> } />
            <Route path='https://frontend-jjo0sb87j-abubakars-projects-8fcb8a81.vercel.app/about'  element={<About/> } />
            <Route path='https://frontend-jjo0sb87j-abubakars-projects-8fcb8a81.vercel.app/contact'  element={<Contact/> } />
            <Route path='https://frontend-jjo0sb87j-abubakars-projects-8fcb8a81.vercel.app/login'  element={<Login/> } />
            <Route path='https://frontend-jjo0sb87j-abubakars-projects-8fcb8a81.vercel.app/register'  element={<Register/> } />
            <Route path='https://frontend-jjo0sb87j-abubakars-projects-8fcb8a81.vercel.app/products'  element={<Products/> } />
            <Route path='https://frontend-jjo0sb87j-abubakars-projects-8fcb8a81.vercel.app/product/:id'  element={<ProductInfo/> } />
            <Route path='https://frontend-jjo0sb87j-abubakars-projects-8fcb8a81.vercel.app/cart'  element={<Cart/> } />
            <Route path='https://frontend-jjo0sb87j-abubakars-projects-8fcb8a81.vercel.app/checkout'  element={<Checkout/> } />
        </Routes>
    </>
  )
}

export default Routing