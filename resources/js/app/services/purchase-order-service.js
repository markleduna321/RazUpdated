import axios from 'axios';

export async function get_products_for_purchase_order_service() {
    try {
        const response = await axios.get('api/purchase-orders/products');
        return res.data; // Assuming the API returns products directly in res.data
    } catch (error) {
        console.error('Error fetching purchase orders:', error);
        throw error; // Optionally rethrow the error to handle it in the calling function
    }
}
