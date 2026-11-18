import { configureStore } from '@reduxjs/toolkit'; // Function that creates the Redux store
import cartReducer from './CartSlice'; // Reducer that manages the cart slice
// Create the Redux store with the cart slice
const store = configureStore({
    reducer: {
        cart: cartReducer, // state.cart is managed by cartReducer
    },
});
export default store; // Used by <Provider> in main.jsx