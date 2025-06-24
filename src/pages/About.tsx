
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const About = () => {
  const leaders = [
    {
      name: "Pastor John Smith",
      title: "Senior Pastor",
      bio: "Pastor John has been leading UCC for over 15 years with a passion for biblical teaching and community outreach.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Pastor Mary Johnson",
      title: "Associate Pastor",
      bio: "Pastor Mary specializes in youth ministry and women's programs, bringing energy and heart to our community.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center">About Us</h1>
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                To glorify God by making disciples of Jesus Christ who love God, love others, 
                and serve the world. We are committed to creating a welcoming community where 
                everyone can experience God's love and grow in their faith journey.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                To be a church that transforms lives and communities through the power of 
                God's love, creating a place where people can find hope, healing, and purpose 
                in Jesus Christ.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Beliefs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Beliefs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Scripture</h3>
              <p className="text-gray-700">
                We believe the Bible is the inspired Word of God and our guide for faith and life.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Salvation</h3>
              <p className="text-gray-700">
                We believe in salvation by grace through faith in Jesus Christ alone.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Community</h3>
              <p className="text-gray-700">
                We believe in the importance of Christian fellowship and serving others.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leaders.map((leader, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img 
                  src={leader.image} 
                  alt={leader.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{leader.name}</h3>
                  <p className="text-blue-800 font-medium mb-4">{leader.title}</p>
                  <p className="text-gray-700">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
