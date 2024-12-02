import fetch from 'node-fetch';

const search = async (query) => {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${query}&from=2024-11-26&to=2024-11-26&sortBy=popularity&apiKey=76acae67181d47ca93388145e8c95b85`
    );

    console.log('Response Status:', response.status);

    const contentType = response.headers.get('content-type');
    console.log('Response Headers:', response.headers);
    console.log('Content-Type:', contentType);

    if (contentType.includes('application/json')) {
      // Attempt to parse as JSON
      const data = await response.json();
      console.log('Parsed JSON:', data);
      return data;
    }

    if (contentType.includes('text/plain') || contentType.includes('text/html')) {
      // Log unexpected response for debugging
      const textData = await response.text();
      console.error('Unexpected text response:', textData);
      throw new Error(`Unexpected response format: ${textData}`);
    }

    throw new Error('Unknown response format');
  } catch (err) {
    console.error('Error fetching data:', err.message);
    throw err; // Propagate for higher-level debugging
  }
};
export default { search };