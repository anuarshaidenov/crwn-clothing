import React from 'react';

import './checkoutItem.styles.scss';

const CheckoutItem = ({ cartItem: { name, imageUrl, quantity, price } }) => (
  <div className="checkout-item">
    <div className="checkout-item__image-container">
      <img className="checkout-item__image" src={imageUrl} alt={name} />
    </div>
    <span className="checkout-item__name">{name}</span>
    <span className="checkout-item__quantity">{quantity}</span>
    <span className="checkout-item__price">{price}</span>
    <button type="button" className="checkout-item__remove">
      &#10005;
    </button>
  </div>
);

export default CheckoutItem;
