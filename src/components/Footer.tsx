import { Mail, MapPin, Phone, ArrowUpRight, Instagram, Facebook, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="ucc-footer">
    <div className="ucc-shell">
      <div className="ucc-footer-main">
        <div className="ucc-footer-brand">
          <Link to="/" className="ucc-brand ucc-brand-footer">
            <img src="/images/ucc-logo.png" alt="United Christian Church" />
            <span><strong>UCC</strong><small>UNITED CHRISTIAN CHURCH</small></span>
          </Link>
          <p>A church family growing in faith, strengthening one another, and serving our community with the love of Christ.</p>
          <div className="ucc-socials">
            <a href="https://www.instagram.com/ucconline__/" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={17} /></a>
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook size={17} /></a>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" aria-label="YouTube"><Youtube size={17} /></a>
          </div>
        </div>
        <div className="ucc-footer-column">
          <h3>Explore</h3>
          <Link to="/about">Our story</Link><Link to="/sermons">Sermons</Link><Link to="/events">Events</Link><Link to="/ministries">Ministries</Link><Link to="/gallery">Gallery</Link>
        </div>
        <div className="ucc-footer-column">
          <h3>Get in touch</h3>
          <a href="mailto:info@unitedchristianchurch.org"><Mail size={15} /> info@unitedchristianchurch.org</a>
          <a href="tel:+250788674367"><Phone size={15} /> +250 788 674 367</a>
          <span><MapPin size={15} /> Gikondo, Kigali, Rwanda</span>
          <Link to="/contact" className="ucc-footer-visit">Come visit us <ArrowUpRight size={15} /></Link>
        </div>
      </div>
      <div className="ucc-footer-bottom">
        <span>© {new Date().getFullYear()} United Christian Church. All rights reserved.</span>
        <span>Built on faith. Rooted in community.</span>
      </div>
    </div>
  </footer>
);

export default Footer;
