import './App.css';
import React from 'react';

import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// components
import AppNav from './components/AppNav/AppNav.js';
import HomePage from './pages/HomePage.js';
import ArticlePage from './pages/ArticlePage.js';

// data
import navItemsData from './data/navItems.json';

function App() {
  // states
  const [navItems, setNavItems] = useState(navItemsData)

  // render
  return (
    <div>
      <AppNav navItems={navItems} handleNavClick={(clickedItem) => console.log(clickedItem)} />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={ <HomePage /> } />
          <Route exact path="/articles/:articleID" element={ <ArticlePage /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
