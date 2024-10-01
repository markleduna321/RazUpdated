import { createSlice } from '@reduxjs/toolkit'

const path = window.location.hash.substring(1); // Get the hash without the first character
const hash = path.split('&')[0];
export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    product:{}
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload
    },
    setProduct: (state, action) => {
        state.product = action.payload
      },
  },
})
export const { 
  setProducts,
  setProduct
 } = productsSlice.actions

export default productsSlice.reducer
