import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  newOrders: [],
  paidOrders: [],
  deliveredOrders: [],
  summary: {
    newOrdersSummary: {
      totalQty: 0,
      totalPrice: 0,
    },
    paidOrderSummary: {
      totalQty: 0,
      totalPrice: 0,
    },
    deliveredOrders: {
      totalQty: 0,
      totalPrice: 0,
    },
  },
};

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    addToNewOrder: (state, action) => {
      state.newOrders.push(action.payload);
      for (const ordItem of action.payload) {
        state.summary.newOrdersSummary.totalPrice +=
          ordItem.quantity * ordItem.price;
        state.summary.newOrdersSummary.totalQty += ordItem.quantity;
      }
    },
    markAsPaid: (state, action) => {
      console.log(action.payload);
      //remove from new orders
      //add to paidOrders
    },
    markAsDelivered: (state) => {
      //remove from paid
      //add to delivered
    },
    // getNewOrderSummary: (state) => {
    //   return {
    //     totalQty: state.orders.summary.newOrdersSummary.totalQty,
    //     totalPrice: state.orders.summary.newOrdersSummary.totalPrice,
    //     orders: state.orders.newOrders,
    //   };
    // },
  },
});

export const getNewOrderSummary = (state) => {
  console.log("called");
  console.log({
    totalQty: state.orders.summary.newOrdersSummary.totalQty,
    totalPrice: state.orders.summary.newOrdersSummary.totalPrice,
    orders: state.orders.newOrders,
  });
  return {
    totalQty: state.orders.summary.newOrdersSummary.totalQty,
    totalPrice: state.orders.summary.newOrdersSummary.totalPrice,
    orders: state.orders.newOrders,
  };
};

export const { addToNewOrder, markAsPaid, markAsDelivered } =
  orderSlice.actions;

export default orderSlice.reducer;
