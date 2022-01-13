import React from 'react';

import './checkoutItem.styles.scss';

import { connect } from 'react-redux';
import {
  clearItemFromCart,
  removeItem,
  addItem,
} from '../../redux/cart/cart.actions';

const CheckoutItem = ({ cartItem, clearItemFromCart, addItem, removeItem }) => {
  const { name, imageUrl, quantity, price } = cartItem;
  return (
    <div className="checkout-item">
      <div className="checkout-item__image-container">
        <img className="checkout-item__image" src={imageUrl} alt={name} />
      </div>
      <span className="checkout-item__name">{name}</span>
      <span className="checkout-item__quantity">
        <button
          type="button"
          onClick={() => removeItem(cartItem)}
          className="checkout-item__arrow"
        >
          &#10094;
        </button>
        {quantity}
        <button
          type="button"
          onClick={() => addItem(cartItem)}
          className="checkout-item__arrow"
        >
          &#10095;
        </button>
      </span>
      <span className="checkout-item__price">${price}</span>
      <button
        onClick={() => clearItemFromCart(cartItem)}
        type="button"
        className="checkout-item__remove"
      >
        &#10005;
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItemFromCart: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
