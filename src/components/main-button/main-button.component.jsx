import React from 'react';

import './main-button.styles.scss';

const MainButton = ({ children, ...otherProps }) => (
  <button className="main-button" {...otherProps}>
    {children}
  </button>
);

export default MainButton;
