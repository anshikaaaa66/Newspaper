import { Link } from 'react-router-dom';
import './Home.css'; // Ensure you have the updated CSS imported
import About from './About';

const Home = () => {
  return (
    <div className="home">
      <div className="animated-transparent-overlay"></div>

      <div className="text-container">
        <h1 className="big-text">Welcome to Our Platform</h1>
        <p className="small-text">Your gateway to the latest news and updates</p>
      </div>

      <div className="post-button-container">
        <Link to="/post">
          <button className="post-button">Post</button>
        </Link>
      </div>

      <div className="video-container">
        <video controls autoPlay muted>
          <source src="public/Videos/pageds video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="news-category-bar">
        <Link to="/HotNews">
          <button>HOT</button>
        </Link>
        <Link to="/SportsNews">
          <button>SPORTS</button>
        </Link>
        <Link to="/CulturalNews">
          <button>CULTURAL</button>
        </Link>
        <Link to="/HistoricalNews">
          <button>HISTORICAL</button>
        </Link>
        <Link to="/DramaNews">
          <button>DRAMA</button>
        </Link>
        <Link to="/RomanticNews">
          <button>Romantic</button>
        </Link>
      </div>

      <About />
    </div>
  );
};

export default Home;
