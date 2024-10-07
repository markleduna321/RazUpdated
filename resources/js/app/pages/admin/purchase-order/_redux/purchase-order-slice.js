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
  },
});

export const { 
    setPurchase_orders,
    setPurchase_order,
    setLoading,
    setError
} = purchase_ordersSlice.actions;

export default purchase_ordersSlice.reducer;
