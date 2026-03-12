import React from 'react';
import './App.css';
import ProductList from './Components/ProductList/ProductList';
import Search from './Components/Search/Search';

function App() {
  return (
    <div className="App">
      <Search />
      <ProductList />
      
    </div>
  );
}

export default App;
