import React from "react";

import styles from "../styles/CartItem.module.scss";

export const CartItem = ({ item }) => {
  const { imageUrl, price, name, quantity } = item;
  return (
    <div className={styles.cartItem}>
      <img src={imageUrl} alt="item" className={styles.img} />
      <div className={styles.itemDetails}>
        <span>{name}</span>
        <span>
          {quantity} x {price}
        </span>
      </div>
    </div>
  );
};
