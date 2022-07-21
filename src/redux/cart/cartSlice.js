import { createSlice } from "@reduxjs/toolkit";
import { addItemToCart, removeItemFromCart } from "./cart.utils";

const initialState = {
  hidden: true,
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCartHidden(cart, action) {
      cart.hidden = !cart.hidden;
    },
    addItem(cart, action) {
      cart.cartItems = addItemToCart(cart.cartItems, action.payload);
    },
    removeItem(cart, action) {
      cart.cartItems = removeItemFromCart(cart.cartItems, action.payload);
    },

    clearCart(cart) {
      cart.cartItems = [];
    },
  },
});

export const { toggleCartHidden, addItem, removeItem, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
