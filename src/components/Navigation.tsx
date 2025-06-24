import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Sermons', path: '/sermons' },
    { name: 'Events', path: '/events' },
    { name: 'Ministries', path: '/ministries' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Contact Bar */}
      <div className="hidden md:flex bg-blue-900 text-white text-xs md:text-sm py-2 px-4 flex-col md:flex-row justify-between items-center border-b border-blue-800 justify-between">
        <div className="flex items-center gap-4 mb-1 md:mb-0">
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 12.414a4 4 0 1 0-1.414 1.414l4.243 4.243a1 1 0 0 0 1.414-1.414z"/><circle cx="11" cy="11" r="8"/></svg>
            <span>Kigali, RWANDA Gikondo-merez</span>
          </span>
          <span className="hidden md:inline-block h-4 border-l border-blue-700 mx-2"></span>
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92V19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2.08"/><path d="M16 2v4"/><path d="M8 2v4"/><rect width="20" height="16" x="2" y="6" rx="2"/></svg>
            <a href="mailto:info@unitedchristianchurch.org" className="hover:underline text-white">info@unitedchristianchurch.org</a>
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92V19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2.08"/><path d="M16 2v4"/><path d="M8 2v4"/><rect width="20" height="16" x="2" y="6" rx="2"/></svg>
            <a href="tel:+250788674367" className="hover:underline text-white">+250 788 674 367</a>
          </span>
        </div>
      </div>
      <nav className="bg-white shadow-lg sticky top-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 md:h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center gap-2">
                <img src="/images/ucc-logo.png" alt="UCC Online Logo" className="w-12 h-12 md:w-10 md:h-10 rounded-full shadow-lg border-2 border-blue-800 bg-white object-contain" />
                <span className="text-xl md:text-2xl font-extrabold text-blue-900 tracking-tight">UCC Online</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="text-gray-700 hover:text-blue-800 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-700 hover:text-blue-800 focus:outline-none"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="text-gray-700 hover:text-blue-800 block px-3 py-2 text-base font-medium transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navigation;
