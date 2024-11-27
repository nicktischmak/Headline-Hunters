export const fetchNews = async (category: string) => {
    try {
      const response = await fetch(`http://localhost:5000/api/news?category=${category}`);
      const data = await response.json();
      return data;
    } catch (err) {
      console.error('Failed to fetch news:', err);
      return [];
    }
  };