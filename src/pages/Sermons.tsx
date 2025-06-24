
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Play, Download, Search, Calendar, User } from 'lucide-react';
import { useState } from 'react';

const Sermons = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSeries, setSelectedSeries] = useState('all');

  const sermonSeries = [
    { id: 'all', name: 'All Sermons' },
    { id: 'faith-journey', name: 'Faith Journey' },
    { id: 'love-series', name: 'Love Without Limits' },
    { id: 'hope-series', name: 'Finding Hope' },
    { id: 'christmas', name: 'Christmas 2024' }
  ];

  const sermons = [
    {
      title: "Walking in Faith Daily",
      date: "December 22, 2024",
      speaker: "Pastor John Smith",
      description: "Exploring what it means to trust God completely in our daily lives and practical steps to strengthen our faith walk.",
      videoId: "dQw4w9WgXcQ",
      duration: "32 minutes",
      series: "faith-journey",
      tags: ["faith", "daily living", "trust"],
      downloads: 245,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Love Without Limits",
      date: "December 15, 2024",
      speaker: "Pastor Mary Johnson",
      description: "Understanding God's unconditional love and how we can share it with others in our community and beyond.",
      videoId: "dQw4w9WgXcQ",
      duration: "28 minutes",
      series: "love-series",
      tags: ["love", "community", "relationships"],
      downloads: 189,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Finding Hope in Difficult Times",
      date: "December 8, 2024",
      speaker: "Pastor John Smith",
      description: "How to maintain hope and faith during life's challenging seasons, drawing strength from God's promises.",
      videoId: "dQw4w9WgXcQ",
      duration: "35 minutes",
      series: "hope-series",
      tags: ["hope", "trials", "perseverance"],
      downloads: 312,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "The Gift of Grace",
      date: "December 1, 2024",
      speaker: "Pastor Mary Johnson",
      description: "Exploring the beautiful gift of God's grace and how it transforms our lives from the inside out.",
      videoId: "dQw4w9WgXcQ",
      duration: "30 minutes",
      series: "christmas",
      tags: ["grace", "transformation", "christmas"],
      downloads: 156,
      image: "https://images.unsplash.com/photo-1438032005730-c779502df39b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Building Strong Families",
      date: "November 24, 2024",
      speaker: "Pastor John Smith",
      description: "Biblical principles for creating strong, loving families that honor God and support each other.",
      videoId: "dQw4w9WgXcQ",
      duration: "38 minutes",
      series: "faith-journey",
      tags: ["family", "relationships", "biblical principles"],
      downloads: 278,
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "The Power of Prayer",
      date: "November 17, 2024",
      speaker: "Pastor Mary Johnson",
      description: "Understanding prayer as our lifeline to God and how to develop a meaningful prayer life.",
      videoId: "dQw4w9WgXcQ",
      duration: "33 minutes",
      series: "faith-journey",
      tags: ["prayer", "spiritual disciplines", "communion with God"],
      downloads: 201,
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  const filteredSermons = sermons.filter(sermon => {
    const matchesSearch = sermon.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         sermon.speaker.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         sermon.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSeries = selectedSeries === 'all' || sermon.series === selectedSeries;
    return matchesSearch && matchesSeries;
  });

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Header */}
      <div 
        className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20"
        style={{
          backgroundImage: `linear-gradient(rgba(30,64,175,0.8), rgba(29,78,216,0.8)), url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sermons & Messages</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Listen to inspiring messages that will strengthen your faith and encourage your walk with God
          </p>
        </div>
      </div>

      {/* Search and Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search sermons, speakers, or topics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <select
              value={selectedSeries}
              onChange={(e) => setSelectedSeries(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {sermonSeries.map(series => (
                <option key={series.id} value={series.id}>{series.name}</option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Featured Sermon */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Latest Message</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="aspect-video bg-gray-200 flex items-center justify-center relative">
                <img 
                  src={sermons[0].image}
                  alt={sermons[0].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-white bg-opacity-90 rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-opacity-100 transition-all">
                      <Play className="text-blue-800 text-2xl ml-1" />
                    </div>
                    <p className="text-white text-lg font-semibold">Watch Sermon</p>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center mb-4 text-sm text-gray-600">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="mr-4">{sermons[0].date}</span>
                  <User className="w-4 h-4 mr-2" />
                  <span className="mr-4">{sermons[0].speaker}</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                    {sermons[0].duration}
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{sermons[0].title}</h3>
                <p className="text-gray-700 mb-6 text-lg">{sermons[0].description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {sermons[0].tags.map((tag, index) => (
                    <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      #{tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-600">
                    <Download className="w-4 h-4 mr-2" />
                    <span>{sermons[0].downloads} downloads</span>
                  </div>
                  <div className="space-x-3">
                    <button className="bg-blue-800 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                      Watch Now
                    </button>
                    <button className="border border-blue-800 text-blue-800 px-6 py-2 rounded-lg hover:bg-blue-50 transition-colors">
                      Download Audio
                    </button>
                  </div>
                </div>
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
            {filteredSermons.slice(1).map((sermon, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img 
                    src={sermon.image}
                    alt={sermon.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 bg-white bg-opacity-90 rounded-full flex items-center justify-center cursor-pointer">
                      <Play className="text-blue-800 ml-1" />
                    </div>
                  </div>
                  <div className="absolute top-2 right-2 bg-blue-800 text-white px-2 py-1 rounded text-xs">
                    {sermon.duration}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3 text-xs text-gray-600">
                    <Calendar className="w-3 h-3 mr-1" />
                    <span className="mr-3">{sermon.date}</span>
                    <User className="w-3 h-3 mr-1" />
                    <span>{sermon.speaker}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">{sermon.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{sermon.description}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {sermon.tags.slice(0, 2).map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-500 text-xs">
                      <Download className="w-3 h-3 mr-1" />
                      <span>{sermon.downloads}</span>
                    </div>
                    <div className="space-x-2">
                      <button className="bg-blue-800 text-white px-3 py-1 rounded text-xs hover:bg-blue-700 transition-colors">
                        Watch
                      </button>
                      <button className="border border-gray-300 text-gray-600 px-3 py-1 rounded text-xs hover:bg-gray-50 transition-colors">
                        Download
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sermon Series */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Current Sermon Series</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-blue-800 to-blue-600 rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Faith Journey Series</h3>
              <p className="mb-6">Join us as we explore what it means to walk with God daily, building unshakeable faith through life's ups and downs.</p>
              <div className="flex items-center justify-between">
                <span className="text-blue-100">6 part series</span>
                <button className="bg-white text-blue-800 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  View Series
                </button>
              </div>
            </div>
            <div className="bg-gradient-to-r from-green-700 to-green-500 rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Love Without Limits</h3>
              <p className="mb-6">Discover the depths of God's love and learn how to extend that same unconditional love to others in our community.</p>
              <div className="flex items-center justify-between">
                <span className="text-green-100">4 part series</span>
                <button className="bg-white text-green-700 px-4 py-2 rounded-lg font-semibold hover:bg-green-50 transition-colors">
                  View Series
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Additional Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="w-8 h-8 text-blue-800" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Sermon Notes</h3>
              <p className="text-gray-600 mb-4">Download PDF sermon notes and discussion guides for personal study or small groups.</p>
              <button className="text-blue-800 font-semibold hover:underline">Browse Notes</button>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Play className="w-8 h-8 text-green-800" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Podcast</h3>
              <p className="text-gray-600 mb-4">Subscribe to our podcast to never miss a message. Available on all major platforms.</p>
              <button className="text-green-800 font-semibold hover:underline">Subscribe Now</button>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-purple-800" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Speaking Calendar</h3>
              <p className="text-gray-600 mb-4">See upcoming speakers and special events in our preaching calendar.</p>
              <button className="text-purple-800 font-semibold hover:underline">View Calendar</button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sermons;
