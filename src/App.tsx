import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import './App.scss';
import Home from './pages/Home';
import Products from './pages/Products';

function App() {



  return (
    <div className="App">
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
