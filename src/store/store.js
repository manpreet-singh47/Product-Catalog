import { configureStore } from "@reduxjs/toolkit";
import getDetails from "../slices/getDetails";
import CartSlice from "../slices/CartSlice";

const store = configureStore({
  reducer: { productDetails: getDetails, cartItems: CartSlice },
});

export default store;
