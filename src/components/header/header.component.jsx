import React from 'react';

import './header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';

const Header = () => (
  <header className="header">
    <div class="container">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <nav className="nav">
        <ul className="nav-links">
          <li>
            <Link to="/shop" className="nav-link">
              SHOP
            </Link>
          </li>
          <li>
            <Link to="/shop" className="nav-link">
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
