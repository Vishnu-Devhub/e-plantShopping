import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const { name, image, cost } = action.payload; // Get the plant details
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem) {
        existingItem.quantity++; // Already in the cart, so add one more
      } else {
        state.items.push({ name, image, cost, quantity: 1 }); // New plant in the cart
      }
    },

    removeItem: (state, action) => {
      // Keep every item except the one whose name matches
      state.items = state.items.filter(item => item.name !== action.payload);
    },

    updateQuantity: (state, action) => {

    
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
