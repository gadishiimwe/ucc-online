import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { BookOpen, Headphones, Instagram, Youtube, ArrowUpRight, Search, MessageCircle } from 'lucide-react';
import { useState } from 'react';

const topics = [
  { title: 'Faith for everyday life', text: 'Explore what it means to trust God, follow Jesus and live out your faith in daily moments.', icon: BookOpen },
  { title: 'Prayer and spiritual growth', text: 'Make room for prayer, reflection and a deeper understanding of God’s Word.', icon: Headphones },
  { title: 'Love and community', text: 'Discover how the love of Christ shapes the way we care for family, neighbours and one another.', icon: MessageCircle },
];

const Sermons = () => {
  const [search, setSearch] = useState('');
  const visible = topics.filter(item => (item.title + ' ' + item.text).toLowerCase().includes(search.toLowerCase()));
  return <div className="ucc-site"><Navigation/><main>
    <section className="ucc-page-hero ucc-page-hero-sermons"><div className="ucc-shell ucc-page-hero-content"><span className="ucc-eyebrow ucc-eyebrow-light"><span/> LISTEN · LEARN · GROW</span><h1>Messages for the<br/><em>journey of faith.</em></h1><p>Take time to reflect, grow in God’s Word and put faith into practice.</p><div className="ucc-breadcrumb"><a href="/">Home</a><span>/</span> Sermons</div></div></section>
    <section className="ucc-page-section"><div className="ucc-shell"><div className="ucc-section-heading ucc-section-heading-row"><div><span className="ucc-eyebrow"><span/> GROW DEEPER</span><h2>Explore themes that <em>matter.</em></h2><p>Use the search to explore some of the themes at the heart of our faith.</p></div><div className="ucc-search-wrap"><Search size={18}/><input aria-label="Search message topics" placeholder="Search topics..." value={search} onChange={e=>setSearch(e.target.value)}/></div></div>
    {visible.length ? <div className="ucc-info-card-grid">{visible.map(({title,text,icon:Icon},i)=><article className="ucc-info-card ucc-topic-card" key={title}><span className="ucc-card-number">0{i+1}</span><div className="ucc-info-icon"><Icon size={23}/></div><h3>{title}</h3><p>{text}</p></article>)}</div> : <div className="ucc-empty-state"><Search size={28}/><h3>No matching topics</h3><p>Try another word or phrase.</p></div>}
    </div></section>
    <section className="ucc-page-section ucc-page-section-soft"><div className="ucc-shell ucc-media-feature"><div className="ucc-media-art"><div className="ucc-media-orbit"/><BookOpen size={66} strokeWidth={1}/><span>GROW IN THE WORD</span></div><div><span className="ucc-eyebrow"><span/> STAY CONNECTED</span><h2>Follow along with <em>UCC.</em></h2><p className="ucc-lead">Find the church’s latest updates and shared moments through its social channels. New message recordings can be added here when official video or audio links are available.</p><div className="ucc-inline-actions"><a className="ucc-button ucc-button-gold" href="https://www.instagram.com/ucconline__/" target="_blank" rel="noreferrer">Visit Instagram <Instagram size={17}/></a><a className="ucc-button ucc-button-outline-dark" href="https://www.youtube.com/" target="_blank" rel="noreferrer">YouTube <Youtube size={17}/></a></div></div></div></section>
    <section className="ucc-page-cta"><div className="ucc-shell ucc-page-cta-inner"><div><span className="ucc-eyebrow ucc-eyebrow-light"><span/> TAKE THE NEXT STEP</span><h2>Let’s grow <em>together.</em></h2><p>Join us for worship, Bible study and fellowship in Gikondo.</p></div><a href="https://www.instagram.com/ucconline__/" target="_blank" rel="noreferrer" className="ucc-button ucc-button-light">Connect with UCC <ArrowUpRight size={17}/></a></div></section>
  </main><Footer/></div>;
};
export default Sermons;
