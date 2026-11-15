import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CalendarDays, Clock3, MapPin, ArrowRight, Users, BookOpen, Music2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const gatherings = [
  { day: 'SUNDAY', title: 'Sunday Worship', time: '10:00 AM', detail: 'Come together for worship, teaching and fellowship.', icon: Music2, featured: true },
  { day: 'WEDNESDAY', title: 'Bible Study', time: '7:00 PM', detail: 'Spend time in Scripture and grow in understanding together.', icon: BookOpen },
  { day: 'FRIDAY', title: 'Youth Service', time: '6:00 PM', detail: 'A space for young people to connect, learn and grow in faith.', icon: Users },
];

const Events = () => <div className="ucc-site"><Navigation/><main>
  <section className="ucc-page-hero ucc-page-hero-events"><div className="ucc-shell ucc-page-hero-content"><span className="ucc-eyebrow ucc-eyebrow-light"><span/> LIFE TOGETHER</span><h1>Make time for<br/><em>what matters.</em></h1><p>Gather with us for worship, learning and meaningful fellowship.</p><div className="ucc-breadcrumb"><Link to="/">Home</Link><span>/</span> Events</div></div></section>
  <section className="ucc-page-section"><div className="ucc-shell"><div className="ucc-section-heading ucc-section-heading-center"><span className="ucc-eyebrow"><span/> WEEKLY GATHERINGS</span><h2>There’s a place for <em>you here.</em></h2><p>Here are the regular gathering times currently shared by UCC.</p></div><div className="ucc-gathering-grid">{gatherings.map(({day,title,time,detail,icon:Icon,featured})=><article className={featured?'ucc-gathering-card featured':'ucc-gathering-card'} key={day}><span className="ucc-service-day">{day}</span><div className="ucc-info-icon"><Icon size={23}/></div><h3>{title}</h3><div className="ucc-service-time"><Clock3 size={17}/>{time}</div><p>{detail}</p><div className="ucc-gathering-foot"><span><MapPin size={14}/> Gikondo, Kigali</span><CalendarDays size={17}/></div></article>)}</div></div></section>
  <section className="ucc-page-section ucc-page-section-soft"><div className="ucc-shell ucc-event-note"><div className="ucc-event-note-icon"><CalendarDays size={28}/></div><div><span className="ucc-eyebrow"><span/> SPECIAL EVENTS</span><h2>Stay in the <em>loop.</em></h2><p>Special event dates and one-off programmes are shared through the church. Contact the team or follow UCC online for the latest announcements before making plans.</p><div className="ucc-inline-actions"><Link to="/contact" className="ucc-button ucc-button-gold">Ask about an event <ArrowRight size={17}/></Link><a href="https://www.instagram.com/ucconline__/" target="_blank" rel="noreferrer" className="ucc-text-link">Follow updates <ArrowRight size={16}/></a></div></div></div></section>
  <section className="ucc-page-cta"><div className="ucc-shell ucc-page-cta-inner"><div><span className="ucc-eyebrow ucc-eyebrow-light"><span/> COME AS YOU ARE</span><h2>We’ll save you <em>a seat.</em></h2><p>We look forward to meeting you at a gathering.</p></div><Link to="/contact" className="ucc-button ucc-button-light">Plan your visit <ArrowRight size={17}/></Link></div></section>
</main><Footer/></div>;
export default Events;
