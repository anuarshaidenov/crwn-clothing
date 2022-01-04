import React from 'react';

import './main-button.styles.scss';

const MainButton = ({ children, isGoogleSignIn, ...otherProps }) => (
  <button
    className={`main-button ${isGoogleSignIn ? 'main-button--google' : ''}`}
    {...otherProps}
  >
    {children}
  </button>
);

export default MainButton;
