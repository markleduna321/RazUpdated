import { configureStore } from '@reduxjs/toolkit';
import appSlice from '../_redux/app-slice';
import productsSlice from '../pages/admin/products/_redux/products-slice';
import accountsSlice from '../pages/admin/accounts/_redux/accounts-slice';
import purchase_ordersSlice from '../pages/admin/purchase-order/_redux/purchase-order-slice';
import orderInventoriesSlice from '../pages/admin/order-inventory/_redux/order-inventory-slice';

const store = configureStore({
    reducer: {
        app: appSlice,
        products: productsSlice,
        accounts: accountsSlice,
        purchase_orders: purchase_ordersSlice,
        order_inventories: orderInventoriesSlice,  // Use 'purchase_orders' as the key here
    },
});

export const RootState = store.getState;
export const AppDispatch = store.dispatch;

export default store;
