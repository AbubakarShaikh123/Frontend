import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="flex flex-col items-center px-8 py-12">
      {/* First Section */}
      <div className="w-full max-w-6xl bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg shadow-lg p-8 mb-8 transition-all hover:shadow-2xl hover:scale-105">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-gray-800">
          {/* Branding Section */}
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold">MyShop</h2>
            <p className="mt-4 text-lg leading-relaxed">
              Your one-stop shop for quality products.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              
              <li>
                <a href="#" className="hover:text-gray-600 transition">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-600 transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-600 transition">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="text-center md:text-right">
            <h3 className="text-2xl font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-end gap-6">
              <a href="#" className="text-gray-800 hover:text-gray-600 transition">
                <FaFacebook size={32} />
              </a>
              <a href="#" className="text-gray-800 hover:text-gray-600 transition">
                <FaTwitter size={32} />
              </a>
              <a href="#" className="text-gray-800 hover:text-gray-600 transition">
                <FaInstagram size={32} />
              </a>
              <a href="#" className="text-gray-800 hover:text-gray-600 transition">
                <FaYoutube size={32} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="w-full max-w-6xl bg-gradient-to-r from-gray-600 to-gray-800 rounded-lg shadow-lg p-6 transition-all hover:shadow-2xl hover:scale-105">
        <div className="text-center">
          <p className="text-white text-sm">© 2024 MyShop - All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
