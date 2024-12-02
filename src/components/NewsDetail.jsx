const NewsDetail = ({ title, author, description, url }) => (
    <div className="news-detail">
      <h2>{title || 'No Title Available'}</h2>
      <h4>{author || 'Unknown Author'}</h4>
      <p>{description || 'No Description Available'}</p>
      <a href={url || '#'} target="_blank" rel="noopener noreferrer">
        Read More
      </a>
    </div>
  );
  
  export default NewsDetail;