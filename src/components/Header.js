import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectCartHidden } from "../redux/cart/cart.selectors";
import { toggleCartHidden } from "../redux/cart/cartSlice";

import styles from "../styles/Header.module.scss";
import { CartDropdown } from "./CartDropdown";
import { CartPreview } from "./CartPreview";

export const Header = () => {
  const hidden = useSelector(selectCartHidden);
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <div>
        <Link to="/">Tienda</Link>
      </div>
      <div>
        <Link to="/mis-ordenes">Mis Ordenes</Link>
      </div>
      <div
        onClick={() => {
          dispatch(toggleCartHidden());
        }}
      >
        <CartPreview />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};
