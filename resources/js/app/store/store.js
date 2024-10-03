
import { configureStore } from '@reduxjs/toolkit';
import appSlice from '../_redux/app-slice';
import productsSlice from '../pages/admin/products/_redux/products-slice';
import accountsSlice from '../pages/admin/accounts/_redux/accounts-slice';
const store = configureStore({
    reducer: {
        app: appSlice,
        products:productsSlice,
        accounts:accountsSlice,
    },
});

export const RootState = store.getState;
export const AppDispatch = store.dispatch;

export default store;
