import React from 'react';

import './homepage.styles.scss';

const HomePage = () => (
  <div className="homepage">
    <div class="container">
      <section className="directory-menu">
        <div className="menu-item menu-item--1">
          <div className="menu-item__content">
            <h1 className="menu-item__title">HATS</h1>
            <span className="menu-item__subtitle">SHOP NOW</span>
          </div>
        </div>
        <div className="menu-item menu-item--2">
          <div className="menu-item__content">
            <h1 className="menu-item__title">JACKETS</h1>
            <span className="menu-item__subtitle">SHOP NOW</span>
          </div>
        </div>
        <div className="menu-item menu-item--3">
          <div className="menu-item__content">
            <h1 className="menu-item__title">SNEAKERS</h1>
            <span className="menu-item__subtitle">SHOP NOW</span>
          </div>
        </div>
        <div className="menu-item menu-item--4">
          <div className="menu-item__content">
            <h1 className="menu-item__title">WOMEN</h1>
            <span className="menu-item__subtitle">SHOP NOW</span>
          </div>
        </div>
        <div className="menu-item menu-item--5">
          <div className="menu-item__content">
            <h1 className="menu-item__title">MEN</h1>
            <span className="menu-item__subtitle">SHOP NOW</span>
          </div>
        </div>
      </section>
    </div>
  </div>
);

export default HomePage;
