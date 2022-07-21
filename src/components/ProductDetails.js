import React, { useMemo } from "react";
import { formatNumToMxnCurrency } from "../utils/formatNumToMxnCurrency";

import styles from "../styles/ProductDetails.module.scss";
import { useDispatch, useSelector } from "react-redux";

import { addItem, removeItem } from "../redux/cart/cartSlice";
import { selectCartItems } from "../redux/cart/cart.selectors";

export const ProductDetails = ({ product }) => {
  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);

  const productCartObj = useMemo(
    () => ({
      id: product.id,
      name: product.title,
      price: Number(product.price) - Number(product.discount),
      imageUrl: product.image_url,
    }),
    [product]
  );

  const isProductInCart = useMemo(() => {
    return cartItems.find(item => item.id === product.id);
  }, [cartItems, product]);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src={product.image_url} alt={product.title} />
      </div>

      <div className={styles.details}>
        <div>{product.title}</div>
        <div className={styles.priceBefore}>
          Antes: <span>{formatNumToMxnCurrency(product.price)} MXN</span>
        </div>
        <div>
          Ahora:
          {formatNumToMxnCurrency(
            Number(product.price) - Number(product.discount)
          )}{" "}
          MXN
        </div>
      </div>

      <button
        className="custom-button"
        onClick={() => {
          dispatch(addItem(productCartObj));
        }}
      >
        Agregar al Carrito
      </button>
      {isProductInCart && (
        <button
          className="custom-button"
          onClick={() => {
            dispatch(removeItem(productCartObj));
          }}
        >
          quitar al Carrito
        </button>
      )}

      <div className={styles.descriptionContainer}>
        <hr />
        <div>Descripcion:</div>
        <div>{product.short_description}</div>
      </div>
    </div>
  );
};
