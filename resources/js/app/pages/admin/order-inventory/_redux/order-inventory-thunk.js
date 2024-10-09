import { fetch_order_inventory_service } from "@/app/services/order-inventory-service";
import { setOrderInventories } from "./order-inventory-slice";

export function fetch_order_inventories_thunk() {
    return async function (dispatch) {
        try {
            dispatch(setLoading(true)); // Indicate loading has started

            // Call the service to fetch purchase orders
            const orders = await fetch_order_inventory_service();
            dispatch(setOrderInventories(orders)); // Dispatch the fetched purchase orders
            return orders; // Return the orders for further handling if needed
        } catch (error) {
            console.error('Error fetching purchase orders:', error);
            dispatch(setError(error.message)); // Dispatch an error action
            throw error; // Rethrow the error to handle it in the component
        } finally {
            dispatch(setLoading(false)); // Indicate loading has finished
        }
    };
}