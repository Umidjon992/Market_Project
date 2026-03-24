import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "../redux/reducers/handleCart";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
