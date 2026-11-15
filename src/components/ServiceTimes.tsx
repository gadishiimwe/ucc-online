import { CalendarDays, Clock3, MapPin, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  { day: 'SUNDAY', name: 'Sunday Worship', time: '10:00 AM', note: 'Worship, teaching and fellowship' },
  { day: 'WEDNESDAY', name: 'Bible Study', time: '7:00 PM', note: 'Grow deeper in God’s Word' },
  { day: 'FRIDAY', name: 'Youth Service', time: '6:00 PM', note: 'Faith, friendship and purpose' },
];

const ServiceTimes = () => (
  <section className="ucc-services-section">
    <div className="ucc-shell">
      <div className="ucc-section-heading ucc-section-heading-row">
        <div>
          <div className="ucc-eyebrow"><span /> COME AS YOU ARE</div>
          <h2>Make room for <em>what matters.</em></h2>
          <p>There is a place for you here. Join us during the week and be part of our church family.</p>
        </div>
        <Link to="/contact" className="ucc-text-link">Plan your visit <ArrowUpRight size={17} /></Link>
      </div>
      <div className="ucc-service-grid">
        {services.map((service, index) => (
          <article className={index === 0 ? 'ucc-service-card featured' : 'ucc-service-card'} key={service.day}>
            <span className="ucc-service-day">{service.day}</span>
            <div className="ucc-service-icon"><CalendarDays size={21} /></div>
            <h3>{service.name}</h3>
            <div className="ucc-service-time"><Clock3 size={17} /> {service.time}</div>
            <p>{service.note}</p>
          </article>
        ))}
      </div>
      <div className="ucc-service-location"><MapPin size={16} /> Gikondo, Kigali, Rwanda <span>·</span> <span>We look forward to welcoming you.</span></div>
    </div>
  </section>
);

export default ServiceTimes;
