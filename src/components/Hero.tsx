
const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
        }}
      >
        <div className="text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Welcome to United Christian Church
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 animate-fade-in">
            Building faith, strengthening families, and serving our community with God's love
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center animate-fade-in">
            <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 w-full sm:w-auto">
              Join Us Sunday
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors duration-200 w-full sm:w-auto">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
