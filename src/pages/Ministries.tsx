import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Ministries = () => {
  const ministries = [
    {
      name: "Youth Ministry",
      description: "Empowering young people to grow in faith through engaging activities, mentorship, and biblical teaching.",
      image: "/images/ucconline___14030707_191402737.jpg",
      contact: "Pastor Mary Johnson"
    },
    {
      name: "Women's Ministry",
      description: "Creating a supportive community where women can grow spiritually, build friendships, and serve together.",
      image: "/images/ucconline___14030707_191402771.jpg",
      contact: "Sarah Wilson"
    },
    {
      name: "Men's Ministry",
      description: "Building brotherhood and spiritual growth through Bible study, fellowship, and community service.",
      image: "/images/ucconline___14030707_191402796.jpg",
      contact: "David Thompson"
    },
    {
      name: "Children's Ministry",
      description: "Nurturing young hearts with age-appropriate Bible lessons, crafts, and activities in a safe, loving environment.",
      image: "/images/ucconline___14030707_191402817.jpg",
      contact: "Lisa Brown"
    },
    {
      name: "Worship Ministry",
      description: "Leading the congregation in heartfelt worship through music, vocals, and technical support.",
      image: "/images/ucconline___14030707_191402830.jpg",
      contact: "Michael Davis"
    },
    {
      name: "Outreach Ministry",
      description: "Serving our community through food drives, mission trips, and local partnerships.",
      image: "/images/ucconline___14030707_191402845.jpg",
      contact: "Pastor John Smith"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Header */}
      <div className="text-white py-32" style={{
        backgroundImage: `url('/images/ucconline___14030707_191708224.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center">Ministries</h1>
          <p className="text-center text-blue-100 mt-4 text-lg">
            Discover opportunities to grow, serve, and connect
          </p>
        </div>
      </div>

      {/* Ministries Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Ministries</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Whether you're looking to deepen your faith, serve others, or build meaningful relationships, 
              we have a ministry where you can belong and make a difference.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ministries.map((ministry, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={ministry.image} 
                  alt={ministry.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{ministry.name}</h3>
                  <p className="text-gray-700 mb-4">{ministry.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-blue-800 font-medium">
                      Contact: {ministry.contact}
                    </span>
                  </div>
                  <button className="w-full mt-4 bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                    Get Involved
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Get Involved?</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            We believe everyone has gifts and talents that can make a difference. 
            Contact us to learn more about how you can contribute to our ministries.
          </p>
          <button className="bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
            Contact Us Today
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Ministries;
