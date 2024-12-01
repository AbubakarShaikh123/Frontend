import React from 'react';
import { useRecoilValue } from 'recoil';
import { productsState } from '../store/productsAtom';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card'; // Import Card component

const HomePage = () => {
  const products = useRecoilValue(productsState);
  const navigate = useNavigate();

  // Get the first 3 featured products
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Section with Greyish Gradient */}
      <div className="bg-gradient-to-r from-gray-600 via-gray-500 to-gray-400 text-white text-center py-28">
        <h1 className="text-5xl font-extrabold tracking-wide mb-6">Welcome to MyShop</h1>
        <p className="text-lg mb-6">Discover a wide range of amazing products for you</p>
        <button
          onClick={() => navigate('/products')}
          className="px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all"
        >
          Explore All Products
        </button>
      </div>

      {/* Featured Products Heading */}
      <div className="text-center mt-28 mb-8">
        <h2 className="text-4xl font-semibold text-gray-800">Featured Products</h2>
        <p className="text-lg text-gray-600 mt-2">Check out some of our best-selling items</p>
      </div>

      {/* Featured Products Grid */}
      <div className="flex justify-center py-10 px-6 mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20">
          {featuredProducts.map((product) => (
            <Card
              key={product.id}
              imgurl={product.imageUrl}
              price={product.price}
              title={product.name}
              id={product.id}
            />
          ))}
        </div>
      </div>

      {/* Explore All Products Section */}
      <div className="text-center mt-16 mb-16">
        <p className="text-2xl text-gray-700 font-medium pb-10">
          Explore our full range of products for more exciting finds!
        </p>
      </div>
    </div>
  );
};

export default HomePage;
