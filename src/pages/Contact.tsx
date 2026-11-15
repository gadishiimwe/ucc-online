import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Mail, MapPin, CalendarDays, Phone, ArrowUpRight, Send, Clock3 } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData,setFormData]=useState({name:'',email:'',subject:'general',message:''});
  const handleSubmit=(e:React.FormEvent)=>{
    e.preventDefault();
    const subject=encodeURIComponent('UCC website enquiry: '+formData.subject);
    const body=encodeURIComponent('Name: '+formData.name+'\nEmail: '+formData.email+'\n\n'+formData.message);
    window.location.href='mailto:info@unitedchristianchurch.org?subject='+subject+'&body='+body;
  };
  const handleChange=(e:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>)=>setFormData({...formData,[e.target.name]:e.target.value});
  return <div className="ucc-site"><Navigation/><main>
    <section className="ucc-page-hero ucc-page-hero-contact"><div className="ucc-shell ucc-page-hero-content"><span className="ucc-eyebrow ucc-eyebrow-light"><span/> WE’RE HERE TO HELP</span><h1>Let’s start a<br/><em>conversation.</em></h1><p>Have a question, a prayer request or want to plan your first visit? We’d love to hear from you.</p><div className="ucc-breadcrumb"><a href="/">Home</a><span>/</span> Contact</div></div></section>
    <section className="ucc-page-section"><div className="ucc-shell ucc-contact-layout">
      <div className="ucc-contact-form-panel"><span className="ucc-eyebrow"><span/> SEND A MESSAGE</span><h2>How can we <em>help?</em></h2><p>Share a little with us and your email app will open with your message ready to send.</p><form className="ucc-contact-form" onSubmit={handleSubmit}>
        <label>Full name<input name="name" value={formData.name} onChange={handleChange} required placeholder="Your name"/></label>
        <label>Email address<input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="you@example.com"/></label>
        <label>What would you like to talk about?<select name="subject" value={formData.subject} onChange={handleChange}><option value="general">General question</option><option value="visit">Planning a visit</option><option value="prayer">Prayer request</option><option value="ministry">Getting involved</option><option value="other">Something else</option></select></label>
        <label>Your message<textarea name="message" value={formData.message} onChange={handleChange} required rows={5} placeholder="Write your message here..."/></label>
        <button className="ucc-button ucc-button-gold" type="submit">Prepare email <Send size={16}/></button>
      </form></div>
      <aside className="ucc-contact-aside"><span className="ucc-eyebrow ucc-eyebrow-light"><span/> GET IN TOUCH</span><h2>We’d love to <em>meet you.</em></h2><p>Reach out or come and see us in Gikondo, Kigali.</p>
        <a className="ucc-contact-detail" href="mailto:info@unitedchristianchurch.org"><span><Mail size={19}/></span><div><small>EMAIL</small><strong>info@unitedchristianchurch.org</strong></div><ArrowUpRight size={16}/></a>
        <a className="ucc-contact-detail" href="tel:+250788674367"><span><Phone size={19}/></span><div><small>PHONE</small><strong>+250 788 674 367</strong></div><ArrowUpRight size={16}/></a>
        <div className="ucc-contact-detail"><span><MapPin size={19}/></span><div><small>LOCATION</small><strong>Gikondo, Kigali, Rwanda</strong></div></div>
        <div className="ucc-contact-detail"><span><Clock3 size={19}/></span><div><small>WEEKLY GATHERINGS</small><strong>Sunday 10:00 AM</strong><strong>Wednesday 7:00 PM · Friday 6:00 PM</strong></div></div>
      </aside>
    </div></section>
    <section className="ucc-map-section"><div className="ucc-shell ucc-map-heading"><div><span className="ucc-eyebrow"><span/> FIND US</span><h2>Come say <em>hello.</em></h2></div><a href="https://www.google.com/maps/search/?api=1&query=United+Christian+Church+Gikondo+Kigali" target="_blank" rel="noreferrer" className="ucc-text-link">Open directions <ArrowUpRight size={16}/></a></div><div className="ucc-shell"><div className="ucc-map-frame"><iframe title="Map showing Gikondo, Kigali" src="https://www.google.com/maps?q=Gikondo%2C%20Kigali%2C%20Rwanda&output=embed" width="100%" height="360" style={{border:0}} loading="lazy" referrerPolicy="no-referrer-when-downgrade"/></div></div></section>
  </main><Footer/></div>;
};
export default Contact;
