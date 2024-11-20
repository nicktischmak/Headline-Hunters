import React from 'react';

const NewsFeed = ({ news }: { news: any[] }) => {
  return (
    <div className="news-feed">
      {news.map((article, index) => (
        <div key={index} className="news-item">
          <h3>{article.title}</h3>
          <p>{article.description}</p>
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            Read more
          </a>
        </div>
      ))}
    </div>
  );
};

export default NewsFeed;