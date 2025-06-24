import { Mail, MapPin, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Church Info */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3">
                <span className="text-blue-900 font-bold text-lg">UCC</span>
              </div>
              <span className="text-xl font-bold">United Christian Church</span>
            </div>
            <p className="text-blue-100 mb-4">
              Building faith, strengthening families, and serving our community with God's love.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-blue-100 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/sermons" className="text-blue-100 hover:text-white transition-colors">Sermons</Link></li>
              <li><Link to="/events" className="text-blue-100 hover:text-white transition-colors">Events</Link></li>
              <li><Link to="/ministries" className="text-blue-100 hover:text-white transition-colors">Ministries</Link></li>
              <li><Link to="/contact" className="text-blue-100 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-blue-300" />
                <span className="text-blue-100">Kigali, RWANDA Gikondo-merez</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-blue-300" />
                <a href="mailto:info@unitedchristianchurch.org" className="text-blue-100 hover:text-white underline">info@unitedchristianchurch.org</a>
              </div>
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-3 text-blue-300" />
                <span className="text-blue-100">Sunday Service: 10:00 AM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <p className="text-blue-100">
            © 2024 United Christian Church. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
