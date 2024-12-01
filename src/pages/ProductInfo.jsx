import React, { useEffect, useState } from 'react'

import axios from 'axios'
import { useNavigate, useParams} from 'react-router-dom'
import { useRecoilState } from 'recoil'
import {productsState} from '../store/productsAtom.js'
// import {isLoggedIn} from '../store/attoms.js'
import {backendUrl} from '../utils/constants.js'
import { cartState } from '../store/attoms.js';

function ProductInfo() {

  const [cart, setCart] = useRecoilState(cartState);
    const navigate = useNavigate()
    const {id} = useParams()

    const [product, setProducts] = useRecoilState(productsState)
    // const [isLogged, setIsLogged] = useRecoilState(isLoggedIn)
    const [currentProduct, setCurrentProduct] = useState(null)

    useEffect(()=>{
        console.log(product);
        console.log(id);
        
        product.map( (i,index)=>{
            if (i.id === id) {
                 setCurrentProduct(i)
                console.log(currentProduct,"th");
                // console.log(product,"Dead");
                
                return true
            }else{
                return true
            }
        })
    },[])

    const addToCart = () => {
      const existingItem = cart.find((item) => item.productId === currentProduct.id);
    
      let message = ''; // Temporary variable for alert message
    
      if (existingItem) {
        setCart(
          cart.map((item) =>
            item.productId === currentProduct.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        );
        message = 'Product quantity updated in the cart!';
      } else {
        setCart([
          ...cart,
          {
            productId: currentProduct.id,
            product: currentProduct,
            quantity: 1,
            totalAmount: currentProduct.price,
          },
        ]);
        message = 'Product added to the cart!';
      }
    
      // Trigger the alert after the state update
      setTimeout(() => {
        alert(message);
      }, 0);
    };
    
    if (!currentProduct) {
        return (
          <div>
            {/* <button
              onClick={() => navigate(-1)}
              className="border px-3 py-[2px] rounded-sm bg-transparent flex items-center justify-center hover:scale-105 transition-all hover:bg-white hover:text-black hover:shadow-xl hover:shadow-white hover:font-bold active:text-white"
            >
              Back
            </button> */}
            <p>Loading product information...</p>
          </div>
        );
      }



return (
    <div className="min-h-screen bg-gray-100 p-6">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition-all"
      >
        Back
      </button>
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Product Image */}
          <div className="md:w-1/2 p-4">
            <img
              src={currentProduct.imageUrl}
              alt={currentProduct.name}
              className="w-full h-auto rounded-md"
            />
          </div>
          {/* Product Details */}
          <div className="md:w-1/2 p-6 flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-4">{currentProduct.name}</h1>
              <p className="text-gray-600 mb-6">{currentProduct.description}</p>
              <p className="text-lg font-semibold text-gray-800">
                Category: <span className="text-gray-700">{currentProduct.category}</span>
              </p>
              <p className="text-xl font-bold text-green-600 mt-4">
                ${currentProduct.price.toFixed(2)}
              </p>
            </div>
            {/* Purchase Button */}
            <button
              className="mt-6 px-6 py-3 bg-gray-200 text-gray-800 font-semibold rounded-md hover:bg-gray-950 hover:text-white transition-all"
              onClick={addToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );


}

export default ProductInfo