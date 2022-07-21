import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { OrderDetails } from "../components/OrderDetails";
import { useFetchAndLoading } from "../hooks/useFetchAndLoading";

export const OrdenPage = () => {
  const { id } = useParams();

  const { data, isLoading } = useFetchAndLoading(
    "https://sandbox.ixaya.net/api/orders",
    id
  );

  const orderData = useMemo(() => {
    if (!data) return null;

    return data.response.filter(order => order.id === id)[0];
  }, [data, id]);

  return isLoading && !orderData ? (
    <LoadingSpinner />
  ) : !orderData ? (
    <p>No existe tu orden con id {id} </p>
  ) : (
    <OrderDetails orderData={orderData} />
  );
};
