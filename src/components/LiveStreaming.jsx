import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import './LiveStreaming.css'; // Ensure you create and import this CSS file

const LiveStreaming = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    // Fetch news data for the sliding news bar
    const fetchNews = async () => {
      try {
        const response = await fetch('https://api.yournewsapi.com/latest-news', {
          headers: {
            'Authorization': 'Bearer ac2b4e90eb52408db0e8f090ee05d126' // Replace with your actual API key
          }
        });
        const data = await response.json();
        setNews(data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();

    // GSAP animation for the news slide bars
    gsap.to('.news-slide-bar', {
      x: '-100%',
      duration: 10,
      repeat: -1,
      ease: 'linear'
    });
  }, []);

  return (
    <div className="live-streaming-container">
      <div className="header">
        <div className="news-slide-bars">
          {news.length > 0 ? (
            <div className="news-slide-bar">
              {news.map((item, index) => (
                <div className="news-card" key={index}>
                  <img src={item.urlToImage} alt={item.title} className="news-image" />
                  <h3 className="news-title">{item.title}</h3>
                  <p className="news-description">{item.description}</p>
                </div>
              ))}
            </div>
          ) : (
            <p>Loading news...</p>
          )}
        </div>
      </div>
      <div className="live-stream">
        <h2>Live Streaming</h2>
        <video controls autoPlay muted>
          <source src="public\video.mp4.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="live-stream">
        <h2>Live Streaming</h2>
        <video controls autoPlay muted>
          <source src="public/27460021_typographic-abstract-news-opener_by_renname_preview.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default LiveStreaming;
