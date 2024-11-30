import { useState, useEffect } from 'react';
import ContainerUI from './UI/ContainerUI';
import Row from './UI/Row';
import CardCenter from './UI/CardCenter';
import SearchForm from './SearchForm';
import search from '../utils/API'; 

const Container = () => {
  // setting state for search results/query
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState('');

  // using API search method to search category/keyword
  const searchNews = (query) => 
    search(query)
      .then((res) => {
        setResults(res.data);
        setSearch('');
      })
      .catch((err) => console.log(err));

      // using API method to render default search result
      useEffect(() => {
        searchNews('politics');
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
                <NewsDetail
                  title={title}
                  author={author}
                  description={description}
                  url={url}
                />
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
