import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const item = action.payload;

      // Prevent duplicates
      const exists = state.find(i => i.id === item.id);
      if (!exists) {
        state.push(item);
      }
    },

    removeFromCart(state, action) {
      const id = action.payload;
      return state.filter(item => item.id !== id);
    }
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
