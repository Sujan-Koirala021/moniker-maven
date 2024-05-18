import React from 'react';
import heroImage from '../assets/hero-image.jpg'; // Import your hero image

const Hero = () => {
  return (
    <div
      className="bg-cover bg-center relative"
      style={{ backgroundImage: `url(${heroImage})`, height: 'calc(100vh - 64px)' }} // Adjust height based on your navbar height
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto flex flex-col justify-center items-center text-white relative z-10 h-full">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Moniker Maven</h1>
          <p className="text-lg md:text-xl max-w-md">Discover the perfect names for your bundle of joy or furry friend with ease and delight.</p>
          <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-4 mt-8 rounded-sm uppercase">Get Started >> </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
