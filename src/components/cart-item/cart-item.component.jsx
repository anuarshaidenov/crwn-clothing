import React from 'react';

import './cart-item.styles.scss';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <div className="cart-item">
    <img className="cart-item__image" src={imageUrl} alt={name} />
    <div className="cart-item__description">
      <span className="cart-item__name">{name}</span>
      <span className="cart-item__price">
        {quantity} x ${price}
      </span>
    </div>
  </div>
);

export default CartItem;
