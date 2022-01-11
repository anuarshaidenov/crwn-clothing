import React from 'react';

import './cart-dropdown.styles.scss';

import MainButton from '../main-button/main-button.component';

const CartDropdown = ({ nav }) => {
  return (
    <div className={`cart-dropdown ${nav ? 'nav__cart-dropdown' : ''}`}>
      <ul className="cart-dropdown__items"></ul>
      <MainButton>Go to checkout</MainButton>
    </div>
  );
};

export default CartDropdown;
