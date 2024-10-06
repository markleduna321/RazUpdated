import { createSlice } from '@reduxjs/toolkit'

const path = window.location.hash.substring(1); // Get the hash without the first character
const hash = path.split('&')[0];

export const purchase_ordersSlice = createSlice({
  name: 'purchase_orders',
  initialState: {
    purchase_orders: [],
    purchase_order:{}
  },
  reducers: {
    setPurchase_orders: (state, action) => {
      state.purchase_orders = action.payload
    },
    setPurchase_order: (state, action) => {
        state.purchase_order = action.payload
      },
  },
})
export const { 
    setPurchase_orders,
    setPurchase_order
 } = purchase_ordersSlice.actions

export default purchase_ordersSlice.reducer