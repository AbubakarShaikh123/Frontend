import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-gray-200 to-white text-gray-800 px-8 py-6 shadow-md sticky top-0 z-50">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="text-3xl font-semibold tracking-wide text-gray-700">
          <a href="/">MyShop</a>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10">
          <li>
            <a
              href="/"
              className="hover:text-gray-500 transition duration-300 text-lg"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/products"
              className="hover:text-gray-500 transition duration-300 text-lg"
            >
              Products
            </a>
          </li>
          <li>
            <a
              href="/cart"
              className="hover:text-gray-500 transition duration-300 text-lg"
            >
              Cart
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="hover:text-gray-500 transition duration-300 text-lg"
            >
              About
            </a>
          </li>
        </ul>

        {/* Cart Icon */}
        <div className="hidden md:block">
          <a
            href="/cart"
            className="flex items-center hover:text-gray-500 transition duration-300 text-lg"
          >
            <FaShoppingCart size={22} />
            <span className="ml-2">Cart</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden focus:outline-none"
        >
          <span className="block w-8 h-1 bg-gray-700 mb-1"></span>
          <span className="block w-8 h-1 bg-gray-700 mb-1"></span>
          <span className="block w-8 h-1 bg-gray-700"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul className="flex flex-col items-center bg-white text-gray-800 mt-4 py-3 rounded-md md:hidden shadow-md border border-gray-200">
          <li className="py-2 w-full text-center hover:bg-gray-100 transition duration-300">
            <a href="/">Home</a>
          </li>
          <li className="py-2 w-full text-center hover:bg-gray-100 transition duration-300">
            <a href="/products">Products</a>
          </li>
          <li className="py-2 w-full text-center hover:bg-gray-100 transition duration-300">
            <a href="/cart">Cart</a>
          </li>
          <li className="py-2 w-full text-center hover:bg-gray-100 transition duration-300">
            <a href="/about">About</a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
