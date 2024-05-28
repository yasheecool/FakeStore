import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./ShoppingCartSlice";
import authReducer from "./AuthSlice";
import orderReducer from "./OrderSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
    orders: orderReducer,
  },
});
