
import { Calendar, MapPin } from 'lucide-react';

const ServiceTimes = () => {
  const services = [
    {
      name: "Sunday Worship",
      time: "10:00 AM",
      description: "Join us for inspiring worship, powerful messages, and fellowship."
    },
    {
      name: "Bible Study",
      time: "Wednesday 7:00 PM",
      description: "Dive deeper into God's word with our weekly Bible study sessions."
    },
    {
      name: "Youth Service",
      time: "Friday 6:00 PM",
      description: "Dynamic worship and teaching designed specifically for our youth."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Service Times
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join us for worship, fellowship, and spiritual growth throughout the week
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-8 h-8 text-blue-800" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.name}
              </h3>
              <p className="text-2xl font-bold text-blue-800 mb-4">
                {service.time}
              </p>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center text-gray-600 mb-4">
            <MapPin className="w-5 h-5 mr-2" />
            <span>123 Faith Street, Your City, State 12345</span>
          </div>
          <p className="text-sm text-gray-500">
            All are welcome! No dress code required - come as you are.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceTimes;
