import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./ShoppingCartSlice";
import authReducer from "./AuthSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
  },
});
