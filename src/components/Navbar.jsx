import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar-header">
      <div className="logo">
        <Link to="/">
          <h1 className="logo-text">NEWSPAPER</h1> {/* Text logo instead of image */}
        </Link>
      </div>
      <nav className="navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/news">News</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/calendar">Calendar</Link></li>
          <li><Link to="/livestreaming"> Streaming</Link></li> {/* Adjusted route and label for consistency */}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
