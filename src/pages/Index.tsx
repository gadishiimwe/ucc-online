
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import ServiceTimes from '../components/ServiceTimes';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Index = () => {
  const features = [
    {
      title: "Inspiring Worship",
      description: "Join us for uplifting worship services filled with contemporary music and biblical teaching.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Strong Community",
      description: "Build lasting friendships and find support in our welcoming church family.",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Life Groups",
      description: "Connect with others through small groups focused on Bible study and fellowship.",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      
      {/* Welcome Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Welcome to Our Church Family
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              At United Christian Church, we believe that everyone is welcome to experience God's love 
              and grace. Whether you're new to faith or have been walking with Christ for years, 
              you'll find a home here where you can grow, serve, and make lasting connections.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group hover:transform hover:scale-105 transition-transform duration-300">
                <div className="mb-6 overflow-hidden rounded-lg shadow-lg">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceTimes />

      {/* Call to Action */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Take Your Next Step?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Whether you're looking for community, spiritual growth, or ways to serve, 
            we'd love to help you find your place in our church family.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Link 
              to="/about"
              className="bg-white text-blue-800 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 inline-block"
            >
              Learn About Us
            </Link>
            <Link 
              to="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-800 transition-colors duration-200 inline-block"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
