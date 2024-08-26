import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './News.css'; // Import the updated CSS file

const News = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          'https://newsapi.org/v2/top-headlines?country=us&apiKey=ac2b4e90eb52408db0e8f090ee05d126' // Replace with your API endpoint and key
        );
        setArticles(response.data.articles);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch news');
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="news-container">
      {/* Big text at the top */}
      <h1 className="big-text">Top Headlines</h1>
      {/* Small text below the big text */}
      <p className="small-text">Stay updated with the latest news</p>

      <div className="news-content">
        {/* News articles in card form */}
        <div className="news-cards">
          {articles.map((article, index) => (
            <div key={index} className="news-card">
              <img src={article.urlToImage} alt={article.title} />
              <h2>{article.title}</h2>
              <p>{article.description}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
