import React from 'react';

import './header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import { auth } from '../../firebase/firebase.utils';
import { signOut } from 'firebase/auth';

import { connect } from 'react-redux';

const Header = ({ currentUser }) => (
  <header className="header">
    <div className="container">
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
          <li>
            {currentUser ? (
              <span className="nav-link" onClick={() => signOut(auth)}>
                SIGN OUT
              </span>
            ) : (
              <Link className="nav-link" to="/sign">
                SIGN IN
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);
