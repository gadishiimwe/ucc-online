import { Link } from 'react-router-dom';
import { ArrowRight, Play, MapPin } from 'lucide-react';

const Hero = () => (
  <section className="ucc-hero">
    <div className="ucc-hero-image" />
    <div className="ucc-hero-shade" />
    <div className="ucc-shell ucc-hero-content">
      <div className="ucc-eyebrow ucc-eyebrow-light"><span /> A PLACE TO BELONG. A FAITH TO GROW.</div>
      <h1>Find your place.<br /><em>Grow in faith.</em></h1>
      <p>We are a church family in Gikondo, Kigali, growing together in Christ and sharing God's love with our community.</p>
      <div className="ucc-hero-actions">
        <Link to="/contact" className="ucc-button ucc-button-gold">Plan your visit <ArrowRight size={17} /></Link>
        <Link to="/about" className="ucc-button ucc-button-outline"><Play size={15} /> Discover UCC</Link>
      </div>
      <div className="ucc-hero-location"><MapPin size={15} /> Gikondo, Kigali · Everyone is welcome</div>
    </div>
    <div className="ucc-hero-note"><span>01</span><i /> FAITH · COMMUNITY · SERVICE</div>
  </section>
);

export default Hero;
