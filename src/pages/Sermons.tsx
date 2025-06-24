
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Sermons = () => {
  const sermons = [
    {
      title: "Walking in Faith",
      date: "December 15, 2024",
      speaker: "Pastor John Smith",
      description: "Exploring what it means to trust God completely in our daily lives.",
      videoId: "dQw4w9WgXcQ" // Placeholder YouTube ID
    },
    {
      title: "Love Without Limits",
      date: "December 8, 2024",
      speaker: "Pastor Mary Johnson",
      description: "Understanding God's unconditional love and how we can share it with others.",
      videoId: "dQw4w9WgXcQ"
    },
    {
      title: "Finding Hope in Difficult Times",
      date: "December 1, 2024",
      speaker: "Pastor John Smith",
      description: "How to maintain hope and faith during life's challenging seasons.",
      videoId: "dQw4w9WgXcQ"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center">Sermons</h1>
          <p className="text-center text-blue-100 mt-4 text-lg">
            Listen to inspiring messages that will strengthen your faith
          </p>
        </div>
      </div>

      {/* Featured Sermon */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Latest Sermon</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">▶</span>
                  </div>
                  <p className="text-gray-600">Video Player Placeholder</p>
                  <p className="text-sm text-gray-500 mt-2">Connect to embed actual sermons</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{sermons[0].title}</h3>
                <p className="text-blue-800 font-medium mb-2">{sermons[0].speaker} • {sermons[0].date}</p>
                <p className="text-gray-700">{sermons[0].description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sermon Archive */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Sermon Archive</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sermons.slice(1).map((sermon, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video bg-gray-200 flex items-center justify-center">
                  <div className="w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center">
                    <span className="text-white">▶</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{sermon.title}</h3>
                  <p className="text-blue-800 font-medium text-sm mb-2">{sermon.speaker}</p>
                  <p className="text-gray-500 text-sm mb-3">{sermon.date}</p>
                  <p className="text-gray-700 text-sm">{sermon.description}</p>
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

export default Sermons;
