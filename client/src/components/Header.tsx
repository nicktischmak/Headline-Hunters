import React from 'react';

const Header = () => {
  return (
    <header style={{ display: 'flex', alignItems: 'center', padding: '10px', backgroundColor: '#282c34', color: 'white' }}>
      <div style={{ flex: 1 }}>
        <button style={{ marginRight: '10px' }}>Home</button>
        <button style={{ marginRight: '10px' }}>World</button>
        <button style={{ marginRight: '10px' }}>Business</button>
        <button style={{ marginRight: '10px' }}>Technology</button>
        <button style={{ marginRight: '10px' }}>Entertainment</button>
      </div>
      <input type="text" placeholder="Search" style={{ marginRight: '10px', padding: '5px' }} />
      <button style={{ marginRight: '10px' }}>Login</button>
      <div>Stocks: <span style={{ fontWeight: 'bold' }}>AAPL $150 | TSLA $200</span></div>
    </header>
  );
};

export default Header;