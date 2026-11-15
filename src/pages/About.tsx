import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight, Heart, BookOpen, Users, HandHeart, Cross, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';

const beliefs = [
  { icon: BookOpen, title: 'God’s Word', text: 'We look to Scripture for wisdom, truth and guidance in everyday life.' },
  { icon: Cross, title: 'Jesus Christ', text: 'We believe in Jesus Christ and the hope, grace and new life found in Him.' },
  { icon: Heart, title: 'Love in action', text: 'We seek to reflect the love of Christ through compassion, kindness and service.' },
];
const values = [
  { icon: Heart, title: 'Love God', text: 'Make space for worship, prayer and a growing relationship with God.' },
  { icon: Users, title: 'Love people', text: 'Create a welcoming community where people can belong and be supported.' },
  { icon: BookOpen, title: 'Grow in faith', text: 'Learn from the Bible and encourage one another along the journey.' },
  { icon: HandHeart, title: 'Serve others', text: 'Use our gifts to make a meaningful difference in our community.' },
];

const About = () => (
  <div className="ucc-site"><Navigation />
    <main>
      <section className="ucc-page-hero ucc-page-hero-about">
        <div className="ucc-shell ucc-page-hero-content"><span className="ucc-eyebrow ucc-eyebrow-light"><span /> WHO WE ARE</span><h1>A community shaped<br /><em>by faith and love.</em></h1><p>Get to know the heart behind United Christian Church in Gikondo, Kigali.</p><div className="ucc-breadcrumb"><Link to="/">Home</Link><span>/</span> Our Story</div></div>
      </section>
      <section className="ucc-page-section"><div className="ucc-shell ucc-story-grid">
        <div className="ucc-story-image"><img src="/images/ucconline___14030707_191708224.jpg" alt="United Christian Church gathering" /><span className="ucc-image-note">ONE FAMILY IN CHRIST</span></div>
        <div className="ucc-story-copy"><span className="ucc-eyebrow"><span /> OUR HEART</span><h2>Church is not just where we gather. It’s <em>how we live.</em></h2><p className="ucc-lead">United Christian Church is a community in Gikondo, Kigali, seeking to grow in faith and share the love of Jesus with the people around us.</p><p>We come together for worship, learning, prayer and fellowship. Whether you are taking your first steps in faith or have been part of a church for years, you are welcome to discover community with us.</p><Link to="/contact" className="ucc-button ucc-button-gold">Come meet us <ArrowRight size={17}/></Link></div>
      </div></section>
      <section className="ucc-page-section ucc-page-section-soft"><div className="ucc-shell"><div className="ucc-section-heading ucc-section-heading-center"><span className="ucc-eyebrow"><span/> WHAT WE BELIEVE</span><h2>Faith that gives us <em>direction.</em></h2><p>These convictions shape the way we worship, grow and care for one another.</p></div><div className="ucc-info-card-grid">{beliefs.map(({icon:Icon,title,text},i)=><article className="ucc-info-card" key={title}><span className="ucc-card-number">0{i+1}</span><div className="ucc-info-icon"><Icon size={23}/></div><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
      <section className="ucc-page-section"><div className="ucc-shell"><div className="ucc-section-heading ucc-section-heading-center"><span className="ucc-eyebrow"><span/> HOW WE LIVE</span><h2>Rooted in faith.<br/><em>United in purpose.</em></h2></div><div className="ucc-values-grid">{values.map(({icon:Icon,title,text})=><article key={title} className="ucc-value-item"><Icon size={25}/><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
      <section className="ucc-page-cta"><div className="ucc-shell ucc-page-cta-inner"><div><span className="ucc-eyebrow ucc-eyebrow-light"><span/> YOUR PLACE IS HERE</span><h2>We would love to <em>welcome you.</em></h2><p>Join us for a service and get to know the UCC family.</p></div><Link to="/contact" className="ucc-button ucc-button-light">Plan a visit <ArrowRight size={17}/></Link></div></section>
    </main><Footer/></div>
);
export default About;
