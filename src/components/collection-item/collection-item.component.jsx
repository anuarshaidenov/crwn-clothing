import React from 'react';

import './collection-item.styles.scss';

const CollectionItem = ({ id, name, price, imageUrl }) => (
  <div className="collection-item">
    <div
      className="collection-item__image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    ></div>
    <div class="collection-item__flex">
      <span className="collection-item__name">{name}</span>
      <span className="collection-item__price">{price}</span>
    </div>
  </div>
);

export default CollectionItem;
