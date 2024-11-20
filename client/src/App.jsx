import React, { useState, useEffect } from 'react';
import { fetchNews } from './services/newsAPI';
import NewsFeed from './components/NewsFeed/NewsFeed';
import './App.css';

const App = () => {
  const [category, setCategory] = useState('general');
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedNews = await fetchNews(category);
      setNews(fetchedNews);
    };
    fetchData();
  }, [category]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>News Aggregator</h1>
        <select onChange={(e) => setCategory(e.target.value)} value={category}>
          <option value="general">General</option>
          <option value="business">Business</option>
          <option value="entertainment">Entertainment</option>
          <option value="health">Health</option>
          <option value="science">Science</option>
          <option value="sports">Sports</option>
          <option value="technology">Technology</option>
        </select>
      </header>
      <NewsFeed news={news} />
    </div>
  );
};

export default App;