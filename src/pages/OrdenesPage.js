import React from "react";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { OrdersPreview } from "../components/OrdersPreview";
import { useFetchAndLoading } from "../hooks/useFetchAndLoading";

export const OrdenesPage = () => {
  const { data, isLoading } = useFetchAndLoading(
    "https://sandbox.ixaya.net/api/orders"
  );

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <OrdersPreview orders={data.response} />
  );
};
