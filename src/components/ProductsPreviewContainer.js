import React from "react";
import { ProductPreview } from "./ProductPreview";

import styles from "../styles/ProductsPreviewContainer.module.scss";

export const ProductsPreviewContainer = ({ productsData }) => {
  return (
    <div className={styles.container}>
      {productsData.map(product => (
        <ProductPreview key={product.id} product={product} />
      ))}
    </div>
  );
};
