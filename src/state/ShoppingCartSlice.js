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

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      if (itemInCart(state.cartItems, action.payload.id)) {
        const idx = findItemIdx(state.cartItems, action.payload.id);
        state.cartItems[idx].quantity++;
        return;
      }
      state.cartItems.push({ ...action.payload, quantity: 1 });
    },
    reduceQty: (state, action) => {
      const idx = findItemIdx(state.cartItems, action.payload.id);
      if (state.cartItems[idx].quantity === 1) {
        state.cartItems.splice(idx, 1);
        return;
      }
      state.cartItems[idx].quantity--;
    },
  },
});

export const { addToCart, reduceQty } = cartSlice.actions;
export const getCartItems = (state) => state.cart.cartItems;
export default cartSlice.reducer;

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addToCart: (state, action) => {
//       state.cartItems.push(action.payload);
//     },
//     removeFromCart: (state, action) => {
//       state.cartItems = state.cartItems.filter(
//         (item) => item.id !== action.payload.id
//       );
//     },
//     clearCart: (state) => {
//       state.cartItems = [];
//     },
//     setLoading: (state, action) => {
//       state.loading = action.payload;
//     },
//     setError: (state, action) => {
//       state.error = action.payload;
//     },
//   },
// });

// export const {
//   addToCart,
//   removeFromCart,
//   clearCart,
//   setLoading,
//   setError,
// } = cartSlice.actions;

// export default cartSlice.reducer;
