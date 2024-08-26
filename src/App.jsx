import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import News from './components/News';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Calendar from './components/Calendar';
import HotNews from './components/HotNews';
import SportsNews from './components/SportsNews';
import CulturalNews from './components/CulturalNews';
import LiveStreaming from './components/LiveStreaming';
import Post from './components/Post'; // Import the Post component
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './styles.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/HotNews" element={<HotNews />} />
          <Route path="/SportsNews" element={<SportsNews />} />
          <Route path="/CulturalNews" element={<CulturalNews />} />
          <Route path="/LiveStreaming" element={<LiveStreaming />} />
          <Route path="/post" element={<Post />} /> {/* Add Post route */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
