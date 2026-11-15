import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { ArrowLeft, Compass } from 'lucide-react';

const NotFound = () => <div className="ucc-site"><Navigation/><main className="ucc-not-found"><div className="ucc-not-found-orbit"><Compass size={54}/><span>404</span></div><span className="ucc-eyebrow"><span/> THIS PAGE ISN’T HERE</span><h1>Let’s find your<br/><em>way back.</em></h1><p>The page may have moved, or the address may be incorrect. You can return to the homepage and continue exploring UCC.</p><Link to="/" className="ucc-button ucc-button-gold"><ArrowLeft size={17}/> Back to home</Link></main><Footer/></div>;
export default NotFound;
