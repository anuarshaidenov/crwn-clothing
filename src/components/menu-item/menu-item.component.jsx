import React from 'react';
import { useNavigate } from 'react-router-dom';

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  const navigate = useNavigate();
  return (
    <div
      style={{ backgroundImage: `url(${imageUrl})` }}
      className={`menu-item ${size ? `menu-item--${size}` : ''}`}
      onClick={() => navigate(`/${linkUrl}`)}
    >
      <div className="menu-item__content">
        <h1 className="menu-item__title">{title}</h1>
        <span className="menu-item__subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
