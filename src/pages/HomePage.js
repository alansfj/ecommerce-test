import React from "react";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { ProductsPreviewContainer } from "../components/ProductsPreviewContainer";
import { useFetchAndLoading } from "../hooks/useFetchAndLoading";

export const HomePage = () => {
  const { data, isLoading } = useFetchAndLoading(
    "https://sandbox.ixaya.net/api/products"
  );

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <ProductsPreviewContainer productsData={data.response} />
  );
};
