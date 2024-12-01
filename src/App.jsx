import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import {productsState} from './store/productsAtom.js'
import {isLoggedIn} from './store/attoms.js'
import axios from 'axios'
import {backendUrl} from './utils/constants.js'
import {About, Contact, Home, Login, ProductInfo, Products} from './pages/index.js' 

import Routing from './utils/Routing.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const [products, setProducts] = useRecoilState(productsState)
  // const [email, setEmail] =useState("")
  // const [password, setPassword] =useState("")


  useEffect(() => {
    axios
      .get(`${backendUrl}/getProducts`, { withCredentials: true })
      .then((response) => {
        // console.log(response.data.products, 'API Response');
        setProducts(response.data.products || []); // Ensure it's always an array
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
        setProducts([]); // Set to empty array in case of error
      });

      if (isLoggedIn) {
        axios
      }

  }, []);

  


  return (
    <>
      <div>
        <Navbar/>
        <Routing/>
        <Footer/>
      </div>
    </>
  )
}

export default App
