import { configureStore } from '@reduxjs/toolkit'; // Function that creates the Redux store
import cartReducer from './CartSlice'; // Reducer that manages the cart slice
 const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});
export default store
