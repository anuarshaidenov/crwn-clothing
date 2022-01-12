import React from 'react';

import './main-button.styles.scss';

const MainButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
  <button
    className={`main-button${isGoogleSignIn ? ' main-button--google' : ''}${
      inverted ? ' main-button--inverted' : ''
    }`}
    {...otherProps}
  >
    {children}
  </button>
);

export default MainButton;
