
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import ServiceTimes from '../components/ServiceTimes';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Heart, Users, BookOpen, Handshake } from 'lucide-react';

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

  const values = [
    {
      icon: Heart,
      title: "Love",
      description: "We believe in loving God with all our heart and loving our neighbors as ourselves."
    },
    {
      icon: Users,
      title: "Community",
      description: "We foster authentic relationships and create a sense of belonging for everyone."
    },
    {
      icon: BookOpen,
      title: "Truth",
      description: "We are committed to teaching and living according to God's Word."
    },
    {
      icon: Handshake,
      title: "Service",
      description: "We actively serve our community and reach out to those in need."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Church Member",
      content: "UCC has been my spiritual home for over 5 years. The community here is genuinely loving and supportive.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Michael Davis",
      role: "Youth Leader",
      content: "The youth programs here have transformed my teenager's life. The mentorship is incredible.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Emily Wilson",
      role: "New Member",
      content: "As a newcomer to the city, UCC welcomed me with open arms and helped me find my place.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c371?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
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

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These fundamental beliefs guide everything we do as a church community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-blue-800" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceTimes />

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What People Are Saying
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from our church family about their experiences and how God is working in their lives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-lg">
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-blue-800 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery Preview */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Church Life Gallery
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See our vibrant community in action through worship, fellowship, and service.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1438032005730-c779502df39b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
              alt="Church worship"
              className="w-full h-32 object-cover rounded-lg hover:opacity-80 transition-opacity cursor-pointer"
            />
            <img 
              src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
              alt="Youth ministry"
              className="w-full h-32 object-cover rounded-lg hover:opacity-80 transition-opacity cursor-pointer"
            />
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
              alt="Community service"
              className="w-full h-32 object-cover rounded-lg hover:opacity-80 transition-opacity cursor-pointer"
            />
            <img 
              src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
              alt="Children ministry"
              className="w-full h-32 object-cover rounded-lg hover:opacity-80 transition-opacity cursor-pointer"
            />
          </div>
        </div>
      </section>

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
