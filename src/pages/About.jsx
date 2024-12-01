import React from 'react';

function About() {
  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">About Us</h1>
        <p className="text-gray-600 mb-6">
          Welcome to <span className="font-semibold">MyShop</span>, your one-stop destination for the best products online. 
          We believe in offering quality, affordability, and a seamless shopping experience.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
        <p className="text-gray-600 mb-6">
          Our mission is to make online shopping easy and accessible for everyone. We strive to provide a curated collection of products 
          that cater to your needs and enhance your lifestyle.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Us?</h2>
        <ul className="list-disc list-inside text-gray-600 mb-6">
          <li>High-quality products at competitive prices.</li>
          <li>Fast and reliable shipping.</li>
          <li>Dedicated customer support.</li>
          <li>Easy returns and exchanges.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h2>
        <p className="text-gray-600 mb-6">
          To become a trusted name in e-commerce by continuously innovating and enhancing the shopping experience for our customers.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
        <p className="text-gray-600 mb-2">
          Have questions? Need assistance? Feel free to reach out to us at:
        </p>
        <p className="text-gray-800 font-semibold">
          Email: support@myshop.com
        </p>
        <p className="text-gray-800 font-semibold">
          Phone: +1 (123) 456-7890
        </p>
      </div>
    </div>
  );
}

export default About;
