import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./ShoppingCartSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
  },
});
