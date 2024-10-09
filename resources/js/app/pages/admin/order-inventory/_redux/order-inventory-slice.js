import { createSlice } from '@reduxjs/toolkit'

const path = window.location.hash.substring(1); // Get the hash without the first character
const hash = path.split('&')[0];
export const orderInventoriesSlice = createSlice({
  name: 'orderInventories',
  initialState: {
    orderInventories: [],
    orderInventory:{}
  },
  reducers: {
    setOrderInventories: (state, action) => {
      state.orderInventories = action.payload
    },
    setOrderInventory: (state, action) => {
        state.orderInventory = action.payload
      },
  },
})
export const { 
  setOrderInventories,
  setOrderInventory
 } = orderInventoriesSlice.actions

export default orderInventoriesSlice.reducer
