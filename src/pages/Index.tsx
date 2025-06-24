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
      image: "/images/ucconline___14030707_191708195.jpg"
    },
    {
      title: "Strong Community",
      description: "Build lasting friendships and find support in our welcoming church family.",
      image: "/images/ucconline___14030707_191708211.jpg"
    },
    {
      title: "Life Groups",
      description: "Connect with others through small groups focused on Bible study and fellowship.",
      image: "/images/ucconline___14030707_191708238.jpg"
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
      image: "/images/ucconline___14030707_191715109.jpg"
    },
    {
      name: "Yves HABIMANA",
      role: "Youth Leader",
      content: "The youth programs here have transformed my teenager's life. The mentorship is incredible.",
      image: "/images/ucconline___14030707_191715121.jpg"
    },
    {
      name: "Emily Wilson",
      role: "New Member",
      content: "As a newcomer to the city, UCC welcomed me with open arms and helped me find my place.",
      image: "/images/ucconline___14030707_191715185.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 animate-fade-in">
      <Navigation />
      <Hero />
      
      {/* Statistics Section - before Testimonials, hidden on mobile */}
      <section className="hidden md:block py-12">
        <div className="max-w-2xl mx-auto flex flex-row gap-8 justify-center items-center">
          <div className="flex-1 text-center bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <h3 className="text-3xl font-extrabold text-blue-100 mb-1">500+</h3>
            <p className="text-blue-100 text-base font-medium">Active Members</p>
          </div>
          <div className="flex-1 text-center bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <h3 className="text-3xl font-extrabold text-blue-100 mb-1">15+</h3>
            <p className="text-blue-100 text-base font-medium">Years of Service</p>
          </div>
          <div className="flex-1 text-center bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <h3 className="text-3xl font-extrabold text-blue-100 mb-1">12</h3>
            <p className="text-blue-100 text-base font-medium">Active Ministries</p>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-white/80 backdrop-blur-md shadow-lg rounded-3xl mx-2 md:mx-0 mt-8 animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-6 animate-fade-in-down">
              Welcome to Our Church Family
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed animate-fade-in">
              At United Christian Church, we believe that everyone is welcome to experience God's love 
              and grace. Whether you're new to faith or have been walking with Christ for years, 
              you'll find a home here where you can grow, serve, and make lasting connections.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-transform duration-300 animate-fade-in-up bg-white/90 rounded-2xl shadow-xl p-4">
                <div className="mb-6 overflow-hidden rounded-xl shadow-lg">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300 rounded-xl"
                  />
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-3">
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
      <section className="py-20 bg-white mt-12 rounded-3xl mx-2 md:mx-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-6">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              These fundamental beliefs guide everything we do as a church community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white/90 rounded-2xl p-8 shadow-xl text-center hover:shadow-2xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-blue-800" />
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceTimes />

      {/* Testimonials */}
      <section className="py-20 bg-white/80 backdrop-blur-md shadow-lg rounded-3xl mx-2 md:mx-0 mt-12 animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-6 animate-fade-in-down">
              What People Are Saying
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto animate-fade-in">
              Hear from our church family about their experiences and how God is working in their lives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-100 to-orange-100 rounded-2xl p-8 shadow-xl animate-fade-in-up">
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-blue-800 shadow-md"
                  />
                  <div>
                    <h4 className="font-semibold text-blue-900">{testimonial.name}</h4>
                    <p className="text-orange-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery Preview */}
      <section className="py-20 bg-gradient-to-r from-orange-50 to-blue-50 animate-fade-in-up mt-12 rounded-3xl mx-2 md:mx-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-6 animate-fade-in-down">
              Church Life Gallery
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto animate-fade-in">
              See our vibrant community in action through worship, fellowship, and service.
            </p>
            <div className="mt-4">
              <Link to="/gallery" className="inline-block bg-blue-800 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-lg">View Full Gallery</Link>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["/images/ucconline___14030707_191715201.jpg","/images/ucconline___14030707_191715217.jpg","/images/ucconline___14030707_191715185.jpg","/images/ucconline___14030707_191715109.jpg"].map((src, idx) => (
              <div key={src} className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-2xl shadow-lg animate-fade-in-up">
                <img
                  src={src}
                  alt={`Gallery preview ${idx+1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-800 text-white mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 animate-fade-in-down">
            Ready to Take Your Next Step?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto animate-fade-in">
            Whether you're looking for community, spiritual growth, or ways to serve, 
            we'd love to help you find your place in our church family.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Link 
              to="/about"
              className="bg-white text-blue-800 px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 hover:text-white transition-colors duration-200 inline-block shadow-lg"
            >
              Learn About Us
            </Link>
            <Link 
              to="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-800 transition-colors duration-200 inline-block shadow-lg"
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
