import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { ProductDetails } from "../components/ProductDetails";
import { useFetchAndLoading } from "../hooks/useFetchAndLoading";

export const ProductPage = () => {
  const { id } = useParams();

  const { data, isLoading } = useFetchAndLoading(
    "https://sandbox.ixaya.net/api/products",
    id
  );

  const currentProductData = useMemo(() => {
    if (!data) return null;

    const productArr = data.response.filter(product => id === product.id);

    return productArr[0];
  }, [data, id]);

  return isLoading && !currentProductData ? (
    <LoadingSpinner />
  ) : !currentProductData ? (
    <p>No existe el producto </p>
  ) : (
    <ProductDetails product={currentProductData} />
  );
};
