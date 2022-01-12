import React from 'react';

import MainButton from '../main-button/main-button.component';

import './collection-item.styles.scss';

const CollectionItem = ({ name, price, imageUrl }) => (
  <div className="collection-item">
    <div
      className="collection-item__image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    ></div>
    <div className="collection-item__flex">
      <span className="collection-item__name">{name}</span>
      <span className="collection-item__price">{price}</span>
    </div>
    <MainButton inverted>Add to cart</MainButton>
  </div>
);

export default CollectionItem;
