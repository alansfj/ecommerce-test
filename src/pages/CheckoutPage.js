import React from "react";

import { CartDetails } from "../components/CartDetails";
import { FormOrder } from "../components/FormOrder";

export const CheckoutPage = () => {
  return (
    <>
      <CartDetails />
      <FormOrder />
    </>
  );
};
