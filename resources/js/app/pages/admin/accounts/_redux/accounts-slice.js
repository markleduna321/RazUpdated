import { createSlice } from '@reduxjs/toolkit'

const path = window.location.hash.substring(1); // Get the hash without the first character
const hash = path.split('&')[0];

export const accountsSlice = createSlice({
  name: 'accounts',
  initialState: {
    accounts: [],
    account:{}
  },
  reducers: {
    setAccounts: (state, action) => {
      state.accounts = action.payload
    },
    setAccount: (state, action) => {
        state.account = action.payload
      },
  },
})
export const { 
  setAccounts,
  setAccount
 } = accountsSlice.actions

export default accountsSlice.reducer