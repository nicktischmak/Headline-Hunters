import React from 'react';
import Header from './components/Header';
import NewsColumn from './components/NewsColumn';

const App = () => {
  return (
    <div>
      <Header />
        <div style={{ flex: 1, overflowY: 'auto', padding: '10px', backgroundColor: '#eaeaea' }}>
          <h2>News</h2>
          <NewsColumn />
        </div>
    </div>
  );
};

export default App;
