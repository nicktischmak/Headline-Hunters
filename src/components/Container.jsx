import { useState, useEffect } from 'react';
import ContainerUI from './UI/ContainerUI';
import Row from './UI/Row';
import CardCenter from './UI/CardCenter';
import SearchForm from './SearchForm';
import API from '../utils/API';
import NewsDetail from './NewsDetail';

const Container = () => {
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState('');

  const searchNews = (query) => {
    API.search(query)
      .then((res) => {
        setResults(res.articles || []);
        setSearch('');
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    searchNews('football');
  }, []);

  const handleInputChange = (e) => setSearch(e.target.value);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (search.trim()) {
      searchNews(search);
    }
  };

  return (
    <ContainerUI>
      <Row>
        <CardCenter heading="Search for News Articles">
        <SearchForm
            handleInputChange={handleInputChange}
            handleFormSubmit={handleFormSubmit}
            value={search}
          />
        </CardCenter>
        <CardCenter>
          {results.length > 0 ? (
            results.map((article, index) => (
              <NewsDetail
                key={index}
                title={article.title}
                author={article.author}
                description={article.description}
                url={article.url}
              />
            ))
          ) : (
            <h3>No Results to Display</h3>
          )}
        </CardCenter>
      </Row>
    </ContainerUI>
  );
};

export default Container;
