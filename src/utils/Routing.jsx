import React from 'react'

import { Router, Routes, Route } from 'react-router-dom'
import {About, Contact, Home, Login, Products, ProductInfo, Register, Cart, Checkout} from '../pages/index.js'

function Routing() {
  return (
    <>
        <Routes>
            <Route path='/'  element={<Home/> } />
            <Route path='/about'  element={<About/> } />
            <Route path='/contact'  element={<Contact/> } />
            <Route path='/login'  element={<Login/> } />
            <Route path='/register'  element={<Register/> } />
            <Route path='/products'  element={<Products/> } />
            <Route path='/product/:id'  element={<ProductInfo/> } />
            <Route path='/cart'  element={<Cart/> } />
            <Route path='/checkout'  element={<Checkout/> } />
        </Routes>
    </>
  )
}

export default Routing