import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Calendar, MapPin } from 'lucide-react';

const Events = () => {
  const upcomingEvents = [
    {
      title: "Christmas Service",
      date: "December 25, 2024",
      time: "10:00 AM",
      location: "Main Sanctuary",
      description: "Join us for a special Christmas celebration with music, readings, and fellowship.",
      category: "Special Service"
    },
    {
      title: "New Year Prayer Night",
      date: "December 31, 2024",
      time: "9:00 PM",
      location: "Main Sanctuary",
      description: "Welcome the new year with prayer, worship, and reflection on God's goodness.",
      category: "Prayer"
    },
    {
      title: "Youth Winter Retreat",
      date: "January 15-17, 2025",
      time: "All Day",
      location: "Mountain View Retreat Center",
      description: "A weekend retreat for youth ages 13-18 focused on faith, friendship, and fun.",
      category: "Youth"
    },
    {
      title: "Women's Bible Study",
      date: "Every Tuesday",
      time: "7:00 PM",
      location: "Fellowship Hall",
      description: "Join us for weekly Bible study and fellowship with other women in our community.",
      category: "Bible Study"
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
          <h1 className="text-4xl md:text-5xl font-bold text-center">Events</h1>
          <p className="text-center text-blue-100 mt-4 text-lg">
            Join us for worship, fellowship, and community events
          </p>
        </div>
      </div>

      {/* Upcoming Events */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Upcoming Events</h2>
          <div className="space-y-8">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mr-3">
                        {event.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                    <p className="text-gray-700 mb-4">{event.description}</p>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{event.date} at {event.time}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-6">
                    <button className="bg-blue-800 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Calendar */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Event Calendar</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center text-gray-600">
              <Calendar className="w-16 h-16 mx-auto mb-4 text-blue-800" />
              <p className="text-lg mb-2">Full Calendar Integration</p>
              <p className="text-sm">Connect with Google Calendar or other calendar systems for a complete view of all church events.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;
