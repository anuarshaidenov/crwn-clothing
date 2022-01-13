import React from 'react';

import { connect } from 'react-redux';

import './cart-dropdown.styles.scss';

import MainButton from '../main-button/main-button.component';
import CartItem from '../cart-item/cart-item.component';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { createStructuredSelector } from 'reselect';

import { useNavigate } from 'react-router-dom';

const CartDropdown = ({ nav, cartItems, dispatch }) => {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate('/checkout');
    dispatch(toggleCartHidden());
  };

  return (
    <div className={`cart-dropdown ${nav ? 'nav__cart-dropdown' : ''}`}>
      <ul className="cart-dropdown__items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="cart-dropdown__empty-message">
            Your cart is empty
          </span>
        )}
      </ul>
      <MainButton onClick={handleClick}>Go to checkout</MainButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropdown);
