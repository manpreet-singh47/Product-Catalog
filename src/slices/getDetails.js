import { createSlice } from "@reduxjs/toolkit";

// const data = {
//   product: null,
// };

const getDetails = createSlice({
  name: "getDetails",
  initialState: null,
  reducers: {
    getDetails: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const getDetailsActions = getDetails.actions;

export default getDetails.reducer;
