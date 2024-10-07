import { create_purchase_orders_service } from "@/app/services/purchase-order-service";
import { setPurchase_orders, setPurchase_order } from "./purchase-order-slice"; // Import actions from your slice

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
