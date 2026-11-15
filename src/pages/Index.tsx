import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import ServiceTimes from '../components/ServiceTimes';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, BookOpen, HandHeart, Users, Quote, ArrowUpRight } from 'lucide-react';

const Index = () => {
  const pillars = [
    { icon: Heart, number: '01', title: 'Love God', text: 'We seek to know God more deeply and reflect His love in everything we do.' },
    { icon: Users, number: '02', title: 'Love People', text: 'We make room for meaningful relationships, belonging and genuine care.' },
    { icon: BookOpen, number: '03', title: 'Grow in Truth', text: 'We build our lives on Scripture and encourage one another in faith.' },
    { icon: HandHeart, number: '04', title: 'Serve Others', text: 'We put faith into action by serving our neighbours and our community.' },
  ];

  const moments = [
    { image: '/images/ucconline___14030707_191708195.jpg', title: 'Worship together', tag: 'SUNDAY GATHERINGS' },
    { image: '/images/ucconline___14030707_191708211.jpg', title: 'Life in community', tag: 'CHURCH FAMILY' },
    { image: '/images/ucconline___14030707_191708238.jpg', title: 'Growing together', tag: 'FELLOWSHIP' },
  ];

  return (
    <div className="ucc-site">
      <Navigation />
      <main>
        <Hero />

        <section className="ucc-welcome-section">
          <div className="ucc-shell ucc-welcome-grid">
            <div className="ucc-welcome-copy">
              <div className="ucc-eyebrow"><span /> WELCOME TO UCC</div>
              <h2>A church is more than a place. <em>It’s people.</em></h2>
              <p className="ucc-lead">Whether you are exploring faith, returning to church, or looking for a community to call home, there is a place for you at United Christian Church.</p>
              <p>We gather to worship, learn from God's Word, build friendships and serve the people around us. Come exactly as you are — we would love to meet you.</p>
              <Link to="/about" className="ucc-text-link">Get to know us <ArrowRight size={17} /></Link>
            </div>
            <div className="ucc-welcome-visual">
              <img src="/images/ucconline___14030707_191708224.jpg" alt="United Christian Church community gathered together" />
              <div className="ucc-image-caption"><span className="ucc-caption-mark">UCC</span><span><strong>One family in Christ</strong><small>Gikondo · Kigali, Rwanda</small></span></div>
              <div className="ucc-welcome-stamp"><span>FAITH</span><span>•</span><span>HOPE</span><span>•</span><span>LOVE</span></div>
            </div>
          </div>
        </section>

        <section className="ucc-pillars-section">
          <div className="ucc-shell">
            <div className="ucc-section-heading ucc-section-heading-center">
              <div className="ucc-eyebrow"><span /> WHAT GUIDES US</div>
              <h2>Rooted in faith.<br /><em>United in purpose.</em></h2>
              <p>Our heart is simple: love God, care for people, grow in truth and make a difference.</p>
            </div>
            <div className="ucc-pillars-grid">
              {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <article className="ucc-pillar-card" key={pillar.number}>
                  <div className="ucc-pillar-top"><span>{pillar.number}</span><Icon size={24} strokeWidth={1.6} /></div>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.text}</p>
                </article>
              );
            })}
            </div>
          </div>
        </section>

        <ServiceTimes />

        <section className="ucc-community-section">
          <div className="ucc-shell ucc-community-grid">
            <div className="ucc-community-image">
              <img src="/images/ucconline___14030707_191715201.jpg" alt="Church members sharing life together" />
              <div className="ucc-community-label">BETTER, TOGETHER.</div>
            </div>
            <div className="ucc-community-copy">
              <div className="ucc-eyebrow ucc-eyebrow-light"><span /> THERE’S A PLACE FOR YOU</div>
              <h2>Faith grows stronger <em>together.</em></h2>
              <p>Church is a family to walk with through every season. Find people to pray with, learn with, celebrate with and serve alongside.</p>
              <div className="ucc-community-points">
                <div><span>01</span><p><strong>Find connection</strong><small>Build friendships and become part of a caring community.</small></p></div>
                <div><span>02</span><p><strong>Discover your place</strong><small>Explore ways to use your gifts and get involved.</small></p></div>
                <div><span>03</span><p><strong>Keep growing</strong><small>Take your next step in faith, one day at a time.</small></p></div>
              </div>
              <Link to="/ministries" className="ucc-button ucc-button-gold">Explore our ministries <ArrowRight size={17} /></Link>
            </div>
          </div>
        </section>

        <section className="ucc-moments-section">
          <div className="ucc-shell">
            <div className="ucc-section-heading ucc-section-heading-row">
              <div>
                <div className="ucc-eyebrow"><span /> LIFE AT UCC</div>
                <h2>Moments that bring <em>us together.</em></h2>
                <p>A glimpse of worship, fellowship and life in our church family.</p>
              </div>
              <Link to="/gallery" className="ucc-text-link">Explore the gallery <ArrowUpRight size={17} /></Link>
            </div>
            <div className="ucc-moments-grid">
              {moments.map((moment, index) => (
                <Link to="/gallery" className="ucc-moment-card" key={moment.title}>
                  <img src={moment.image} alt={moment.title} loading="lazy" />
                  <div className="ucc-moment-overlay"><span>{moment.tag}</span><h3>{moment.title}</h3><ArrowUpRight size={20} /></div>
                  <span className="ucc-moment-index">0{index + 1}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="ucc-quote-section">
          <div className="ucc-shell ucc-quote-inner">
            <Quote size={34} strokeWidth={1.2} />
            <blockquote>“Let all that you do be done in love.”</blockquote>
            <span>1 CORINTHIANS 16:14</span>
          </div>
        </section>

        <section className="ucc-cta-section">
          <div className="ucc-shell ucc-cta-inner">
            <div><div className="ucc-eyebrow ucc-eyebrow-light"><span /> YOUR NEXT STEP STARTS HERE</div><h2>We saved you <em>a seat.</em></h2><p>Come worship with us. Meet the community. Discover a place to belong.</p></div>
            <Link to="/contact" className="ucc-button ucc-button-light">Plan your first visit <ArrowRight size={17} /></Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
