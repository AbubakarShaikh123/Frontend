import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { productsState } from '../store/productsAtom.js';
import axios from 'axios';
import { backendUrl } from '../utils/constants.js';
import Card from '../components/Card.jsx';

function Products() {
  const [products, setProducts] = useRecoilState(productsState);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState('All');
  const [sortOrder, setSortOrder] = useState('asc'); // 'asc' or 'desc'

  // Fetch products
  useEffect(() => {
    axios
      .get(`${backendUrl}/getProducts`, { withCredentials: true })
      .then((response) => {
        setProducts(response.data.products || []);
        setFilteredProducts(response.data.products || []);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
        setProducts([]);
      });
  }, []);

  // Filter and sort products
  useEffect(() => {
    let filtered = [...products]; // Create a copy of the array

    // Filter by category
    if (category !== 'All') {
      filtered = filtered.filter((item) => item.category === category);
    }

    // Sort by price
    filtered.sort((a, b) => {
      return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
    });

    setFilteredProducts(filtered);
  }, [category, sortOrder, products]);

  if (!Array.isArray(products)) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-600 text-xl">Loading...</p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-gray-200 to-white min-h-screen">
      {/* Title Section */}
      <section className="text-center py-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800">Our Products</h1>
        <p className="text-lg sm:text-xl text-gray-600 mt-4">
          Discover our collection of the best products at unbeatable prices.
        </p>
      </section>

      {/* Filters Section */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 py-4">
        {/* Category Filter */}
        <select
          className="border border-gray-300 rounded-md px-4 py-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Furniture">Furniture</option>
          <option value="Home & Kitchen">Home & Kitchen</option>
          <option value="Accessories">Accessories</option>
          <option value="Footwear">Footwear</option>
        </select>

        {/* Sorting */}
        <select
          className="border border-gray-300 rounded-md px-4 py-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="asc">Sort by Price: Low to High</option>
          <option value="desc">Sort by Price: High to Low</option>
        </select>
      </div>

      {/* Product Grid Section */}
      <div className="flex flex-wrap gap-10 items-center justify-center py-10 px-4">
        {filteredProducts.map((item) => (
          <Card
            id={item.id}
            key={item.id} // Unique ID for key
            imgurl={item.imageUrl || 'placeholder.jpg'}
            price={item.price || 'N/A'}
            title={item.name || 'Untitled'}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
