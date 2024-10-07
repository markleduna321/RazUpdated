import { create_purchase_orders_service, fetch_purchase_order_by_id_service, fetch_purchase_orders_service } from "@/app/services/purchase-order-service";
import { setPurchase_orders, setPurchase_order, setLoading, setError } from "./purchase-order-slice"; // Import actions from your slice

export function create_purchase_order_thunk(data) {
    return async function (dispatch) {
        try {
            dispatch(setLoading(true)); // Indicate loading has started

            // Call the service to create the purchase order
            const result = await create_purchase_orders_service(data);
            dispatch(setPurchase_order(result)); // Dispatch the created purchase order
            return result; // Return the result for further handling if needed
        } catch (error) {
            console.error('Error creating purchase order:', error);
            dispatch(setError(error.message)); // Dispatch an error action
            throw error; // Rethrow the error to handle it in the component
        } finally {
            dispatch(setLoading(false)); // Indicate loading has finished
        }
    };
}

export function fetch_purchase_orders_thunk() {
    return async function (dispatch) {
        try {
            dispatch(setLoading(true)); // Indicate loading has started

            // Call the service to fetch purchase orders
            const orders = await fetch_purchase_orders_service();
            dispatch(setPurchase_orders(orders)); // Dispatch the fetched purchase orders
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

export function fetch_purchase_order_by_id_thunk(orderId) {
    return async function (dispatch) {
        try {
            dispatch(setLoading(true)); // Indicate loading has started
            
            const purchaseOrder = await fetch_purchase_order_by_id_service(orderId); // Fetch a specific purchase order by ID
            
            console.log('Fetched Purchase Order:', purchaseOrder); // Log the fetched purchase order
            
            dispatch(setPurchase_order(purchaseOrder)); // Dispatch the action to set the purchase order
            console.log('Dispatched setPurchase_order with:', purchaseOrder); // Log the dispatched action
        } catch (error) {
            console.error('Error fetching purchase order:', error);
            dispatch(setError(error.message)); // Dispatch an error action
        } finally {
            dispatch(setLoading(false)); // Indicate loading has finished
        }
    };
}


