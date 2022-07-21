import React from "react";
import { formatNumToMxnCurrency } from "../utils/formatNumToMxnCurrency";

import styles from "../styles/OrderDetails.module.scss";

export const OrderDetails = ({ orderData }) => {
  return (
    <ul className={styles.ul}>
      <li>
        <strong>Orden: </strong> {orderData.id}
      </li>
      <hr />
      <li>
        <strong>Código: </strong> {orderData.order_code}
      </li>
      <hr />
      <li>
        <strong>Subtotal: </strong> {formatNumToMxnCurrency(orderData.subtotal)}
      </li>
      <hr />
      <li>
        <strong>Descuento: </strong>{" "}
        {formatNumToMxnCurrency(orderData.discount)}
      </li>
      <hr />
      <li>
        <strong>Total: </strong> {formatNumToMxnCurrency(orderData.total)}
      </li>
    </ul>
  );
};
