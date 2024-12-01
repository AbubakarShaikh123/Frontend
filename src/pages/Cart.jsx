import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { cartState } from '../store/attoms.js';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const [cart, setCart] = useRecoilState(cartState);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Cart contents:", cart);
  }, [cart]);

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.productId !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
    } else {
      setCart(
        cart.map((item) =>
          item.productId === productId ? { ...item, quantity } : item
        )
      );
    }
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    // Navigate to the checkout page (to be implemented).
    navigate('/checkout');
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center">
        <img
          src="https://img.freepik.com/free-vector/woman-with-shopping-cart-vector_1308-129957.jpg?t=st=1733061017~exp=1733064617~hmac=6e72824e9f709878675234b242c30a50788e1416167a25c53c94b910f3f99db0&w=360"
          alt="Empty Cart"
          className="mb-6"
        />
        <h1 className="text-2xl font-bold text-gray-700 mb-4">Your Cart is Empty!</h1>
        <p className="text-gray-600 mb-8">Browse our collection and add items to your cart.</p>
        <button
          onClick={() => navigate('/products')}
          className="px-6 py-3 bg-black text-white font-semibold rounded-md hover:bg-white hover:text-black transition-all"
        >
          Explore Products
        </button>
      </div>
    );
  }

  const totalAmount = cart.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={item.productId}
            className="p-4 bg-white rounded shadow flex items-center space-x-4"
          >
            <img
              src={item.product.imageUrl}
              alt={item.product.name}
              className="w-20 h-20 rounded-md object-cover"
            />
            <div className="flex-grow">
              <h2 className="text-xl font-semibold">{item.product.name}</h2>
              <p className="text-gray-600">Price: ${item.product.price}</p>
              <p className="text-gray-600">
                Total: ${(item.product.price * item.quantity).toFixed(2)}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <button
                className="px-2 py-1 bg-gray-300 text-black rounded hover:bg-gray-400"
                onClick={() =>
                  updateQuantity(item.productId, item.quantity - 1)
                }
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                className="px-2 py-1 bg-gray-300 text-black rounded hover:bg-gray-400"
                onClick={() =>
                  updateQuantity(item.productId, item.quantity + 1)
                }
              >
                +
              </button>
              <button
                className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                onClick={() => removeFromCart(item.productId)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 text-right">
        <h2 className="text-xl font-bold">Total: ${totalAmount.toFixed(2)}</h2>
        <button
          onClick={handleCheckout}
          className="mt-4 px-6 py-3 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition-all"
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
