import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "./cart";
import wishlistReducer from "./wishlist";
import bookingReducer from "./booking";
import authReducer from "./auth";
import counterReducer from "./counter";
export const makeStore = () => {
  return configureStore({
    reducer: { cart: cartReducer,
        wishlist: wishlistReducer,
        booking: bookingReducer,
        auth: authReducer,
    counter: counterReducer}
  })
}