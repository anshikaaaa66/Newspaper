import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Calendar.css';

const Calendar = () => {
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [news, setNews] = useState([]);
  const [latestNews, setLatestNews] = useState([]);
  const [countries, setCountries] = useState([]);

  // Fetch the list of countries
  const fetchCountries = async () => {
    try {
      const response = await axios.get('https://restcountries.com/v3.1/all');
      setCountries(response.data);
    } catch (error) {
      console.error('Error fetching countries:', error);
    }
  };

  // Fetch news based on location and date
  const fetchNews = async () => {
    const API_KEY = 'ac2b4e90eb52408db0e8f090ee05d126'; // Replace with your actual News API key
    const API_URL = `https://newsapi.org/v2/everything?q=${location}&from=${date}&sortBy=publishedAt&apiKey=${API_KEY}`;

    try {
      const response = await axios.get(API_URL);
      setNews(response.data.articles);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  // Fetch the latest news
  const fetchLatestNews = async () => {
    const API_KEY = 'ac2b4e90eb52408db0e8f090ee05d126'; // Replace with your actual News API key
    const API_URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`; // Fetch top headlines from the US

    try {
      const response = await axios.get(API_URL);
      setLatestNews(response.data.articles);
    } catch (error) {
      console.error('Error fetching latest news:', error);
    }
  };

  useEffect(() => {
    fetchCountries(); // Fetch countries when the component mounts
    fetchLatestNews(); // Fetch latest news when the component mounts
  }, []);

  useEffect(() => {
    if (location && date) {
      fetchNews();
    }
  }, [location, date]);

  return (
    <div className="calendar-page">
      <div className="search-bar-container">
        <div className="search-bar">
          <select
            className="location-input"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="">Select Location</option>
            {countries.map((country) => (
              <option key={country.cca3} value={country.name.common}>
                {country.name.common}
              </option>
            ))}
          </select>
          <input
            type="date"
            className="date-input"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <button onClick={fetchNews} className="search-button">
            Search
          </button>
        </div>
      </div>

      <div className="news-container">
        <h2>News for Selected Location and Date</h2>
        {news.length === 0 ? (
          <p>No news available for the selected location and date.</p>
        ) : (
          news.map((article, index) => (
            <div key={index} className="news-card">
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                Read more
              </a>
            </div>
          ))
        )}
      </div>

      <div className="latest-news-container">
        <h2>Latest News</h2>
        {latestNews.length === 0 ? (
          <p>Loading latest news...</p>
        ) : (
          latestNews.map((article, index) => (
            <div key={index} className="news-card">
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                Read more
              </a>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Calendar;
