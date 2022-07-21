import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../redux/cart/cart.selectors";
import { clearCart } from "../redux/cart/cartSlice";

import styles from "../styles/FormOrder.module.scss";

const formInitialState = {
  street_name: "",
  zip_code: "",
  address: "",
  phone: "",
  state: "",
  city: "",
};

export const FormOrder = () => {
  const [form, setForm] = useState(formInitialState);

  const cartItems = useSelector(selectCartItems);

  const dispatch = useDispatch();

  const handleSubmit = async e => {
    try {
      e.preventDefault();

      const productsPostArr = cartItems.map(item => ({
        product_id: item.id,
        qty: item.quantity,
      }));

      const obj = {
        ...form,

        product_list: [...productsPostArr],
      };

      const data = await fetch(`https://sandbox.ixaya.net/api/orders/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-KEY": `kg4sgs8okos4cw4w0kckwsgcgocgc4k0c0g8soc0`,
        },
        body: JSON.stringify(obj),
      });

      if (data.status === 200) {
        dispatch(clearCart());
        setForm(formInitialState);
        alert("Compra realizada exitosamente");
      }
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  const handleChange = e => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    cartItems.length > 0 && (
      <form onSubmit={handleSubmit} className={styles.form}>
        <div>
          <label htmlFor="street_name">Calle:</label>
          <input
            className={styles.formInput}
            type="text"
            id="street_name"
            name="street_name"
            value={form["street_name"]}
            onChange={handleChange}
            autoComplete="off"
            required
          />
        </div>
        <div>
          <label htmlFor="zip_code">Código Postal:</label>
          <input
            className={styles.formInput}
            type="number"
            id="zip_code"
            name="zip_code"
            value={form["zip_code"]}
            onChange={handleChange}
            autoComplete="off"
            onWheel={e => {
              e.target.blur();
            }}
            required
          />
        </div>
        <div>
          <label htmlFor="address">Colonia:</label>
          <input
            className={styles.formInput}
            type="text"
            id="address"
            name="address"
            value={form.address}
            onChange={handleChange}
            autoComplete="off"
            required
          />
        </div>
        <div>
          <label htmlFor="phone">Teléfono:</label>
          <input
            className={styles.formInput}
            type="number"
            id="phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            autoComplete="off"
            onWheel={e => {
              e.target.blur();
            }}
            required
          />
        </div>
        <div>
          <label htmlFor="state">Estado:</label>
          <input
            className={styles.formInput}
            type="text"
            id="state"
            name="state"
            value={form.state}
            onChange={handleChange}
            autoComplete="off"
            required
          />
        </div>
        <div>
          <label htmlFor="city">Ciudad:</label>
          <input
            className={styles.formInput}
            type="text"
            id="city"
            name="city"
            value={form.city}
            onChange={handleChange}
            autoComplete="off"
            required
          />
        </div>

        <input type="submit" value="Comprar" className="custom-button" />
      </form>
    )
  );
};
