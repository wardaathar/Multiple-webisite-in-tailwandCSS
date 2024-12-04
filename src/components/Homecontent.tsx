"use client"
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Homecontent = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500, 
      once: true, 
    });
  }, []);

  return (
    <div>
      {/* Hero Section for Handfree Shop */}
      <section
        className="hero h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('proxy-image.png')" }} // Background for headphones shop
      >
        <div className="pl-3 md:pl-16 text-white text-center rounded-md bg-gradient-to-r from-black via-gray-800 to-transparent p-8">
          <h1
            className="text-5xl md:text-7xl font-bold drop-shadow-md"
            data-aos="fade-up"
          >
            Discover the Best in Sound
          </h1>
          <p className="text-xl md:text-2xl mt-4" data-aos="fade-up" data-aos-delay="200">
            Explore our premium collection of wireless headphones and earphones.
          </p>
          <button
            className="mt-6 px-8 py-3 bg-blue-500 hover:bg-blue-700 transition duration-300 rounded-md font-bold"
            data-aos="fade-up" data-aos-delay="400"
          >
            Shop Now
          </button>
        </div>
      </section>

      {/* Featured Products Section */}
    

        <section className="py-16 bg-gray-100">
  <div className="text-center mb-10">
    <h2 className="text-4xl font-semibold text-gray-800">Featured Products</h2>
    <p className="text-xl text-gray-600 mt-2">Browse our latest collection of handfree devices.</p>
  </div>

  <div className="flex flex-wrap justify-center gap-8">
    {/* Product 1 */}
    <div className="w-full sm:w-72 md:w-80 lg:w-96 bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
      '<img src="/red.png" alt="Product 1" className="w-full h-48 object-cover rounded-md" />
      <h3 className="text-xl font-semibold mt-4">Wireless Headphones</h3>
      <p className="text-gray-600 mt-2">High-quality sound and comfort</p>
      <button className="mt-4 px-6 py-2 hover:bg-slate-600 bg-blue-500 text-white rounded-md">Buy Now</button>
    </div>

    {/* Product 2 */}
    <div className="w-full sm:w-72 md:w-80 lg:w-96 bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
      '<img src="blackwireless.png" alt="Product 2" className="w-full h-48 object-cover rounded-md" />'
      <h3 className="text-xl font-semibold mt-4">Noise Cancelling Earbuds</h3>
      <p className="text-gray-600 mt-2">Perfect for travel and focus</p>
      <button className="mt-4 px-6 py-2 hover:bg-slate-600 bg-blue-500 text-white rounded-md">Buy Now</button>
    </div>
  </div>
</section>

    </div>
  );
};

export default Homecontent;
