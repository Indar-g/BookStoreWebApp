import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GetAllBooks, SearchBooksByTitle } from './api';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

console.log(SearchBooksByTitle("Книга Тайубы с именемwdawd"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
