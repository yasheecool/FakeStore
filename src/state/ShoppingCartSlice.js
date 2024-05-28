import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

function findItemIdx(cartItems, id) {
  const idx = cartItems.findIndex((item) => item.id === id);
  return idx;
}

function itemInCart(cartItems, itemId) {
  return cartItems.some((item) => item.id === itemId);
}

function calculateCartSummary(cartItems) {
  let totalQty = 0;
  let totalPrice = 0;

  cartItems.forEach((item) => {
    totalQty += item.quantity;
    totalPrice += item.quantity * item.price;
  });

  return { totalPrice, totalQty };
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log("received in slice: ", action.payload);
      if (itemInCart(state.cartItems, action.payload.id)) {
        const idx = findItemIdx(state.cartItems, action.payload.id);
        state.cartItems[idx].quantity++;
        return;
      }
      if (action.payload.quantity) {
        state.cartItems.push({ ...action.payload });
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
    reduceQty: (state, action) => {
      const idx = findItemIdx(state.cartItems, action.payload.id);
      if (state.cartItems[idx].quantity === 1) {
        state.cartItems.splice(idx, 1);
        return;
      }
      state.cartItems[idx].quantity--;
    },
    clearCart: (state) => {
      console.log("cart items cleared");
      state.cartItems = [];
    },
  },
});

export const { addToCart, reduceQty, clearCart } = cartSlice.actions;
export const getCartItems = (state) => state.cart.cartItems;
export const getCartSummary = (state) => {
  return calculateCartSummary(state.cart.cartItems);
};
export default cartSlice.reducer;
