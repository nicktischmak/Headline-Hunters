import axios from 'axios';

const search = (query) =>
  axios.get(`https://newsapi.org/v2/everything?q=apple&from=2024-11-26&to=2024-11-26&sortBy=popularity&apiKey=76acae67181d47ca93388145e8c95b85`);

export default search;
