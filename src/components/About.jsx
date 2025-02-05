import React, { useState } from 'react';
import axios from 'axios';

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!searchQuery) return;

    setLoading(true);
    try {
      const response = await axios.get('https://ai-news.p.rapidapi.com/news/theguardian', {
        params: { q: searchQuery },
        headers: {
          'X-RapidAPI-Host': 'ai-news.p.rapidapi.com',
          'X-RapidAPI-Key': 'ac2b4e90eb52408db0e8f090ee05d126', // Replace with your RapidAPI key
        },
      });
      console.log(response.data); // Check the structure of the response
      setNews(response.data.articles || []);
    } catch (error) {
      console.error('Error fetching news:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="text-yellow-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white-900">
            Knausgaard typewriter readymade marfa
          </h1>
          <p className="mb-8 leading-relaxed">
            Chillwave portland ugh, knausgaard fam polaroid iPhone. Man braid swag typewriter affogato, hella selvage wolf narwhal dreamcatcher.
          </p>
          <div className="flex w-full md:justify-start justify-center items-end">
            <div className="relative mr-4 md:w-full lg:w-full xl:w-1/2 w-2/4">
              <label htmlFor="hero-field" className="leading-7 text-sm text-white-600">Search News</label>
              <input
                type="text"
                id="hero-field"
                name="hero-field"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white-100 rounded border bg-opacity-50 border-yellow-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button
              onClick={handleSearch}
              className="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg"
            >
              Search
            </button>
          </div>
          <p className="text-sm mt-2 text-gray-500 mb-8 w-full">Neutra shabby chic ramps, viral fixie.</p>
          <div className="flex lg:flex-row md:flex-col">
            {/* Google Play Button */}
            <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 512 512">
                <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z" />
              </svg>
              <span className="ml-4 flex items-start flex-col leading-none">
                <span className="text-xs text-gray-600 mb-1">GET IT ON</span>
                <span className="title-font font-medium">Google Play</span>
              </span>
            </button>
            {/* App Store Button */}
            <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center lg:ml-4 md:ml-0 ml-4 md:mt-4 mt-0 lg:mt-0 hover:bg-gray-200 focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 305 305">
                <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-31.33 4.28-49.7 27.45a2.5 2.5 0 00-.57 3.03c3.04 6.07 16.52 32.2 22.67 34.09a2.5 2.5 0 003.1-.9c6.07-8.8 16.68-13.63 26.58-13.63 12.15 0 18.86 8.5 20.55 10.63 1.43 1.58 3.66 2.64 5.68 2.64 1.66 0 3.32-1.64 4.11-2.87.76-1.2 1.26-2.72 1.56-4.24 5.46-27.12 27.84-45.28 50.46-45.28 3.49 0 6.88.84 9.97 2.48 9.92 4.7 18.32 12.84 24.77 24.48 6.6 12.33 11.12 27.65 14.86 44.88 2.56 13.5 6.02 24.76 12.78 34.9a99.27 99.27 0 0018.5 23.95 89.07 89.07 0 0024.56 21.74 3.99 3.99 0 00-.16-5.56z" />
              </svg>
              <span className="ml-4 flex items-start flex-col leading-none">
                <span className="text-xs text-gray-600 mb-1">Available on the</span>
                <span className="title-font font-medium">App Store</span>
              </span>
            </button>
          </div>
        </div>
        <div className="lg:max-w-4xl lg:w-full md:w-3/4 w-full h-auto">
  <img
    src="public\images\The Mattson 2 _ Identity.jpeg"
    alt="News"
    className="w-full h-auto object-cover rounded-lg shadow-md"

  />
</div>

      </div>
    </section>
  );
};

export default HeroSection;

