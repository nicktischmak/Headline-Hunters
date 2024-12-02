import axios from 'axios';

const search = async (query) => {
  console.log('Query:', query);

  try {
    const response = await axios.get('https://newsapi.org/v2/everything', {
      params: {
        q: query,
        from: '2024-11-26',
        to: '2024-11-26',
        sortBy: 'popularity',
        apiKey: '76acae67181d47ca93388145e8c95b85',
      },
    });

    // Axios automatically parses JSON
    console.log('Axios Response:', response.data);
    return response.data;
  } catch (err) {
    console.error(
      'Axios Error:',
      err.response?.data || err.message
    );
    throw err; // Propagate error for handling in calling function
  }
};

export default { search };