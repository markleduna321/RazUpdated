import { create_purchase_orders_service, fetch_purchase_orders_service } from "@/app/services/purchase-order-service";
import { setPurchase_orders, setPurchase_order, setLoading } from "./purchase-order-slice"; // Import actions from your slice

export function create_purchase_order_thunk(data) {
    return async function (dispatch, getState) {
        try {
            // Optionally, dispatch an action to indicate loading
            // dispatch(setLoading(true));

            // Call the service to create the purchase order
            const result = await create_purchase_orders_service(data);
            
            // Dispatch an action to set the created purchase order (if needed)
            dispatch(setPurchase_order(result)); // Assuming result contains the created purchase order
            return result; // Return the result for further handling if needed
        } catch (error) {
            // Handle error (e.g., dispatch an error action)
            console.error('Error creating purchase order:', error);
            // Optionally, dispatch an action to handle error
            // dispatch(setError(error.message));

            // You may return a specific error message or throw it
            throw error; // Rethrow the error to handle it in the component
        } finally {
            // Optionally, dispatch an action to indicate loading finished
            // dispatch(setLoading(false));
        }
    };
}

export function fetch_purchase_orders_thunk() {
    return async function (dispatch, getState) {
        try {
            // Dispatch action to indicate loading has started
            dispatch(setLoading(true));

            // Call the service to fetch purchase orders
            const orders = await fetch_purchase_orders_service();

            // Dispatch action to set the fetched purchase orders
            dispatch(setPurchase_orders(orders)); // Assuming orders contains the list of purchase orders
            return orders; // Return the orders for further handling if needed
        } catch (error) {
            // Handle error (dispatch an error action)
            console.error('Error fetching purchase orders:', error);
            dispatch(setError(error.message)); // Assuming setError handles error state in your slice

            // Rethrow the error to handle it in the component if needed
            throw error;
        } finally {
            // Dispatch action to indicate loading has finished
            dispatch(setLoading(false));
        }
    };
}
