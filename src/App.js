import React from 'react';
import './app.scss';
import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignPage from './pages/sign/sign.component';
import Header from './components/header/header.component';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/sign" element={<SignPage />} />
      </Routes>
    </div>
  );
}

export default App;
