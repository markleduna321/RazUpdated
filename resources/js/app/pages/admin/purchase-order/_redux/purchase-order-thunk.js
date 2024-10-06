import { purchase_ordersSlice } from "./purchase-order-slice";
import { get_products_for_purchase_order_service } from "@/app/services/purchase-order-service";

export function get_products_for_purchase_order_thunk() {
    return async function (dispatch) {
        try {
            const result = await get_products_for_purchase_order_service();
            console.log('Fetched products:', result);
            dispatch(purchase_ordersSlice.actions.setPurchase_orders(result));
        } catch (error) {
            console.error('Error fetching products:', error);
            // Optionally dispatch an error action
        }
    };
}
