import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-gray-200 to-white text-gray-800 px-8 py-6 shadow-md sticky top-0 z-50">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="text-3xl font-semibold tracking-wide text-gray-700">
          <Link to="/">MyShop</Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-lg transition duration-300 ${
                  isActive ? "text-gray-700 font-semibold" : "hover:text-gray-500"
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `text-lg transition duration-300 ${
                  isActive ? "text-gray-700 font-semibold" : "hover:text-gray-500"
                }`
              }
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `text-lg transition duration-300 ${
                  isActive ? "text-gray-700 font-semibold" : "hover:text-gray-500"
                }`
              }
            >
              Cart
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-lg transition duration-300 ${
                  isActive ? "text-gray-700 font-semibold" : "hover:text-gray-500"
                }`
              }
            >
              About
            </NavLink>
          </li>
        </ul>

        {/* Cart Icon */}
        <div className="hidden md:block">
          <Link
            to="/cart"
            className="flex items-center hover:text-gray-500 transition duration-300 text-lg"
          >
            <FaShoppingCart size={22} />
            <span className="ml-2">Cart</span>
          </Link>
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
            <NavLink
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block w-full ${
                  isActive ? "font-semibold text-gray-700" : ""
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li className="py-2 w-full text-center hover:bg-gray-100 transition duration-300">
            <NavLink
              to="/products"
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block w-full ${
                  isActive ? "font-semibold text-gray-700" : ""
                }`
              }
            >
              Products
            </NavLink>
          </li>
          <li className="py-2 w-full text-center hover:bg-gray-100 transition duration-300">
            <NavLink
              to="/cart"
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block w-full ${
                  isActive ? "font-semibold text-gray-700" : ""
                }`
              }
            >
              Cart
            </NavLink>
          </li>
          <li className="py-2 w-full text-center hover:bg-gray-100 transition duration-300">
            <NavLink
              to="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block w-full ${
                  isActive ? "font-semibold text-gray-700" : ""
                }`
              }
            >
              About
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
