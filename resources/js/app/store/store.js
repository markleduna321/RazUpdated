
import { configureStore } from '@reduxjs/toolkit';
import appSlice from '../_redux/app-slice';
import productsSlice from '../pages/admin/products/_redux/products-slice';
const store = configureStore({
    reducer: {
        app: appSlice,
        products:productsSlice
    },
});

export const RootState = store.getState;
export const AppDispatch = store.dispatch;

export default store;
