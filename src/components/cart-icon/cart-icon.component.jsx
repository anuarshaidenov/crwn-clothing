import React from 'react';

import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

const CartIcon = () => (
  <div className="cart-icon">
    <ShoppingIcon className="cart-icon__shopping-icon" />
    <span className="cart-icon__count">0</span>
  </div>
);

export default CartIcon;
