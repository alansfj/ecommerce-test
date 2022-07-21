import React from "react";
import { Link } from "react-router-dom";

import styles from "../styles/OrdersPreview.module.scss";

export const OrdersPreview = ({ orders }) => {
  return (
    <div>
      {orders.map(order => (
        <div key={order.id} className={styles.orderContainer}>
          <Link to={`/mis-ordenes/${order.id}`}>
            <div className={styles.order}>
              <div>ID de Orden: {order.id}</div>
              <div>Código de Orden: {order.order_code}</div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};
