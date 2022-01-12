import React from 'react';

import { connect } from 'react-redux';

import './cart-dropdown.styles.scss';

import MainButton from '../main-button/main-button.component';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = ({ nav, cartItems }) => {
  return (
    <div className={`cart-dropdown ${nav ? 'nav__cart-dropdown' : ''}`}>
      <ul className="cart-dropdown__items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </ul>
      <MainButton>Go to checkout</MainButton>
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapStateToProps)(CartDropdown);
