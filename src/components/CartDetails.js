import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectCartItems, selectCartTotal } from "../redux/cart/cart.selectors";
import { addItem, removeItem } from "../redux/cart/cartSlice";

import styles from "../styles/CartDetails.module.scss";
import { formatNumToMxnCurrency } from "../utils/formatNumToMxnCurrency";

export const CartDetails = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  const dispatch = useDispatch();

  if (cartItems.length === 0) {
    return (
      <Link to="/">
        <p style={{ textAlign: "center" }}>Ir a la tienda</p>
      </Link>
    );
  }

  return (
    <div className={styles.container}>
      {cartItems.map(item => (
        <div key={item.id} className={styles.itemContainer}>
          <img className={styles.img} src={item.imageUrl} alt={item.name} />
          <span>{item.name}</span>

          <div className={styles.btnsContainer}>
            <button
              className={styles.addremoveBtn}
              onClick={() => {
                dispatch(
                  removeItem({
                    id: item.id,
                  })
                );
              }}
            >
              {"-"}
            </button>
            <span>{item.quantity}</span>
            <button
              className={styles.addremoveBtn}
              onClick={() => {
                dispatch(
                  addItem({
                    id: item.id,
                  })
                );
              }}
            >
              {"+"}
            </button>
          </div>

          <span>
            {formatNumToMxnCurrency(Number(item.price) * Number(item.quantity))}{" "}
            MXN
          </span>
        </div>
      ))}

      <hr />
      <div className={styles.totalPrice}>
        Total: {formatNumToMxnCurrency(cartTotal)} MXN
      </div>
    </div>
  );
};
