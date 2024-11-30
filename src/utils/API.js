import fetch from 'node-fetch';

const search = async (query) => {
  const response = await fetch(`https://newsapi.org/v2/everything?q=${query}&from=2024-11-26&to=2024-11-26&sortBy=popularity&apiKey=76acae67181d47ca93388145e8c95b85`);
  const data = await response.json();
  return data;
};

export default { search };