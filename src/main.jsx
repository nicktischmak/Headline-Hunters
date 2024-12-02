// Polyfill for `global`
if (typeof global === 'undefined') {
    window.global = window;
  }
  
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.createRoot(document.getElementById('root')).render(<App />);