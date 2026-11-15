import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, MapPin, Mail, Phone, ArrowUpRight } from 'lucide-react';

const links = [
  { name: 'Home', path: '/' },
  { name: 'Our Story', path: '/about' },
  { name: 'Sermons', path: '/sermons' },
  { name: 'Events', path: '/events' },
  { name: 'Ministries', path: '/ministries' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="ucc-header">
      <div className="ucc-topbar">
        <div className="ucc-shell ucc-topbar-inner">
          <span><MapPin size={13} /> Gikondo, Kigali, Rwanda</span>
          <div className="ucc-topbar-links">
            <a href="mailto:info@unitedchristianchurch.org"><Mail size={13} /> info@unitedchristianchurch.org</a>
            <a href="tel:+250788674367"><Phone size={13} /> +250 788 674 367</a>
          </div>
        </div>
      </div>
      <nav className="ucc-nav">
        <div className="ucc-shell ucc-nav-inner">
          <Link to="/" className="ucc-brand" onClick={() => setIsOpen(false)}>
            <img src="/images/ucc-logo.png" alt="United Christian Church" />
            <span><strong>UCC</strong><small>UNITED CHRISTIAN CHURCH</small></span>
          </Link>

          <div className="ucc-desktop-links">
            {links.map((link) => (
              <NavLink key={link.path} to={link.path} end={link.path === '/'}
                className={({ isActive }) => isActive ? 'ucc-nav-link active' : 'ucc-nav-link'}>
                {link.name}
              </NavLink>
            ))}
          </div>

          <Link to="/contact" className="ucc-nav-visit">Plan a visit <ArrowUpRight size={16} /></Link>

          <button className="ucc-menu-toggle" aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
        {isOpen && (
          <div className="ucc-mobile-menu">
            {links.map((link) => (
              <NavLink key={link.path} to={link.path} end={link.path === '/'}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => isActive ? 'ucc-mobile-link active' : 'ucc-mobile-link'}>
                {link.name}
              </NavLink>
            ))}
            <a href="tel:+250788674367" className="ucc-mobile-call"><Phone size={16} /> +250 788 674 367</a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
