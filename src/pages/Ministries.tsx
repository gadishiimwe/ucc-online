import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight, Users, Heart, Music2, HandHeart, BookOpen, Baby } from 'lucide-react';
import { Link } from 'react-router-dom';

const ministries = [
  { title: 'Youth & young people', text: 'A place to build friendships, ask questions and grow in faith with others.', image: '/images/ucconline___14030707_191402737.jpg', icon: Users },
  { title: 'Women’s fellowship', text: 'Encouragement, connection and opportunities to grow and serve together.', image: '/images/ucconline___14030707_191402771.jpg', icon: Heart },
  { title: 'Men’s fellowship', text: 'Build meaningful relationships and encourage one another in a life of faith.', image: '/images/ucconline___14030707_191402796.jpg', icon: Users },
  { title: 'Children', text: 'Help children discover biblical stories, kindness and the love of God.', image: '/images/ucconline___14030707_191402817.jpg', icon: Baby },
  { title: 'Worship', text: 'Use music, creativity and practical gifts to help create a welcoming worship experience.', image: '/images/ucconline___14030707_191402830.jpg', icon: Music2 },
  { title: 'Community service', text: 'Put faith into action by caring for neighbours and serving the wider community.', image: '/images/ucconline___14030707_191402845.jpg', icon: HandHeart },
];

const Ministries = () => <div className="ucc-site"><Navigation/><main>
  <section className="ucc-page-hero ucc-page-hero-ministries"><div className="ucc-shell ucc-page-hero-content"><span className="ucc-eyebrow ucc-eyebrow-light"><span/> FIND YOUR PLACE</span><h1>There’s room for<br/><em>everyone to grow.</em></h1><p>Discover ways to connect, build relationships and serve with the UCC family.</p><div className="ucc-breadcrumb"><Link to="/">Home</Link><span>/</span> Ministries</div></div></section>
  <section className="ucc-page-section"><div className="ucc-shell"><div className="ucc-section-heading ucc-section-heading-center"><span className="ucc-eyebrow"><span/> GROW · CONNECT · SERVE</span><h2>Find a place to <em>belong.</em></h2><p>Explore some of the ways people can connect and contribute to church life. Contact UCC to confirm current groups and activities.</p></div><div className="ucc-ministry-grid">{ministries.map(({title,text,image,icon:Icon},i)=><article className="ucc-ministry-card" key={title}><div className="ucc-ministry-image"><img src={image} alt={title} loading="lazy"/><span>0{i+1}</span></div><div className="ucc-ministry-copy"><div className="ucc-info-icon"><Icon size={21}/></div><h3>{title}</h3><p>{text}</p><Link to="/contact" className="ucc-text-link">Ask about joining <ArrowRight size={16}/></Link></div></article>)}</div></div></section>
  <section className="ucc-page-section ucc-page-section-soft"><div className="ucc-shell ucc-service-callout"><div><span className="ucc-eyebrow"><span/> YOUR GIFTS MATTER</span><h2>There’s a way for you <em>to make a difference.</em></h2><p>Whether you enjoy welcoming people, working with children, music, practical support or encouraging others, we’d love to help you find a meaningful next step.</p></div><Link to="/contact" className="ucc-button ucc-button-gold">Get involved <ArrowRight size={17}/></Link></div></section>
</main><Footer/></div>;
export default Ministries;
