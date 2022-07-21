import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "../styles/ProductPreview.module.scss";

export const ProductPreview = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      className={styles.container}
      onClick={() => {
        navigate(`/producto/${product.id}`);
      }}
    >
      <div
        className={styles.imgContainer}
        style={{
          backgroundImage: `url(${product.image_url})`,
        }}
      />
      <div className={styles.titleContainer}>
        <span>{product.title}</span>
      </div>
    </div>
  );
};
