import React from "react";
import { useSelector } from "react-redux";
import { selectCartItemsCount } from "../redux/cart/cart.selectors";

export const CartPreview = () => {
  const cartItemsCount = useSelector(selectCartItemsCount);

  return <div style={{ cursor: "pointer" }}>Carrito: {cartItemsCount}</div>;
};
