import { useEffect } from 'react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
      <div 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/ucconline___14030707_191543248.jpg')`
        }}
      >
        <div className="text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg mt-16 md:mt-0">
            Welcome to United Christian Church
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white drop-shadow-md">
            Building faith, strengthening families, and serving our community with God's love
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <a href="/events" className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 w-full sm:w-auto inline-block">Join Us Sunday</a>
            <a href="/about" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors duration-200 w-full sm:w-auto inline-block">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
