import { createSlice, original } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    cart: [],
    totalPrice: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      let sameValue = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (sameValue >= 0) {
        state.cart[sameValue].quantity += 1;
      } else {
        state.cart.push(action.payload);
      }

      state.totalPrice = state.cart.reduce((initial, currentVal) => {
        let { price } = currentVal;
        initial += price * 1;

        return initial;
      }, 0);
      console.log(state.totalPrice);
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);

      state.totalPrice = state.cart.reduce((initial, currentVal) => {
        let { price } = currentVal;
        initial += price * 1;

        return initial;
      }, 0);
      console.log(state.totalPrice);
    },
  },
});

export const CartSliceActions = cartSlice.actions;

export default cartSlice.reducer;
