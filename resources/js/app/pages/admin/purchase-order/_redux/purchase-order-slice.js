import { createSlice } from '@reduxjs/toolkit';

export const purchase_ordersSlice = createSlice({
  name: 'purchase_orders',
  initialState: {
    purchase_orders: [],
    purchase_order: {},
    loading: false,
    error: null,
  },
  reducers: {
    setPurchase_orders: (state, action) => {
      state.purchase_orders = action.payload;
    },
    setPurchase_order: (state, action) => {
      state.purchase_order = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload; // true or false
    },
    setError: (state, action) => {
      state.error = action.payload; // Error message
    },
    resetError: (state) => {
      state.error = null; // Reset the error to null
    },
  },
});

// Export actions
export const { 
    setPurchase_orders,
    setPurchase_order,
    setLoading,
    setError,
    resetError // Export the reset error action
} = purchase_ordersSlice.actions;

// Selectors
export const selectPurchaseOrders = (state) => state.purchase_orders.purchase_orders;
export const selectPurchaseOrder = (state) => state.purchase_orders.purchase_order;
export const selectLoading = (state) => state.purchase_orders.loading;
export const selectError = (state) => state.purchase_orders.error;

export default purchase_ordersSlice.reducer;
