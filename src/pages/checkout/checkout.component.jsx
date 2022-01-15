import React from 'react';

import './checkout.styles.scss';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { selectCartTotal } from '../../redux/cart/cart.selectors';

import CheckoutItem from '../../components/checkout-item/checkoutItem.component';

const CheckoutPage = ({ cartItems, cartTotal }) => (
  <div className="checkout-page container container--small page">
    <ul className="checkout-page__header">
      <li className="checkout-page__header-item checkout-page__header-item--left-aligned">
        Product
      </li>
      <li className="checkout-page__header-item">Description</li>
      <li className="checkout-page__header-item">Quantity</li>
      <li className="checkout-page__header-item">Price</li>
      <li className="checkout-page__header-item checkout-page__header-item--right-aligned">
        Remove
      </li>
    </ul>
    <ul className="checkout-page__products">
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))
      ) : (
        <span className="checkout-page__empty-message">Your cart is empty</span>
      )}
    </ul>
    <div className="checkout-page__footer">Total: ${cartTotal}</div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
