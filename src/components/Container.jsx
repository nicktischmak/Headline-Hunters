import { useState, useEffect } from 'react';
import ContainerUI from './UI/ContainerUI';
import Row from './UI/Row';
import CardCenter from './UI/CardCenter';
import SearchForm from './SearchForm';
import API from '../utils/API'; 

const Container = () => {
  // setting state for search results/query
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState('');

  // using API search method to search category/keyword
  const searchNews = (query) => {
    API.search(query)
      .then((res) => {
        // Assuming res.data is the correct path to your data
        setResults(res.articles || []);
        
      })
      .catch((err) => console.log(err));
  };
      // using API method to render default search result
      useEffect(() => {
        searchNews('football');
      }, []);

      // handle input changes to search form
      const handleInputChange = (e) => setSearch(e.target.value);

      // handle form submission
      const handleFormSubmit = (e) => {
        e.preventDefault();
        searchNews(search);
      };

      // destructure result object to make code more readable
      const {
        title = '',
        author = '',
        description = '',
        url = '',
      } = results;

      // fallback to default header if title is undefined

      return (
        <ContainerUI>
          <Row>
            <CardCenter heading={title || 'Search for a News Article'}>
              {title ? (
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
            <CardCenter>
              <SearchForm
                handleInputChange={handleInputChange}
                handleFormSubmit={handleFormSubmit}
                results={results}
              />
            </CardCenter>
          </Row>
        </ContainerUI>
      );
}

export default Container;
