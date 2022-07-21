import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { toggleCartHidden } from "../redux/cart/cartSlice";
import { selectCartItems } from "../redux/cart/cart.selectors";
import { CartItem } from "./CartItem";

import styles from "../styles/CartDropdown.module.scss";

export const CartDropdown = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  return (
    <div className={styles.cartDropdown}>
      <div className={styles.cartItems}>
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className={styles.emptyMessage}>El carrito esta vacío</span>
        )}
      </div>
      <button
        className="custom-button"
        onClick={() => {
          dispatch(toggleCartHidden());
          navigate("/checkout");
        }}
      >
        Ir a Pagar
      </button>
    </div>
  );
};
