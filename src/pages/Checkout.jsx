import React from 'react';
import { useRecoilState } from 'recoil';
import { cartState } from '../store/attoms.js';
import { useNavigate } from 'react-router-dom';

function Checkout() {
  const [cart, setCart] = useRecoilState(cartState);
  const navigate = useNavigate();

  const totalAmount = cart.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  const handleConfirmOrder = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    // Here you can call an API to place the order, e.g.,:
    // axios.post(`${backendUrl}/order`, { cart });

    alert("Your order has been placed successfully!");
    setCart([]); // Clear the cart after order is placed
    navigate('/'); // Redirect to the homepage or a thank-you page
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center">
        <img
          src="https://via.placeholder.com/200"
          alt="Empty Cart"
          className="mb-6"
        />
        <h1 className="text-2xl font-bold text-gray-700 mb-4">Your Cart is Empty!</h1>
        <button
          onClick={() => navigate('/products')}
          className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-all"
        >
          Explore Products
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      <div className="space-y-4 bg-white p-6 rounded shadow">
        {cart.map((item) => (
          <div
            key={item.productId}
            className="flex items-center justify-between border-b pb-4 mb-4"
          >
            <div className="flex items-center space-x-4">
              <img
                src={item.product.imageUrl}
                alt={item.product.name}
                className="w-16 h-16 rounded-md object-cover"
              />
              <div>
                <h2 className="text-lg font-semibold">{item.product.name}</h2>
                <p>Quantity: {item.quantity}</p>
              </div>
            </div>
            <p className="text-lg font-bold">${(item.product.price * item.quantity).toFixed(2)}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 text-right">
        <h2 className="text-xl font-bold mb-4">Total: ${totalAmount.toFixed(2)}</h2>
        <button
          onClick={handleConfirmOrder}
          className="px-6 py-3 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition-all"
        >
          Confirm Order
        </button>
      </div>
    </div>
  );
}

export default Checkout;
