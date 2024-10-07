import axios from 'axios';

export async function create_purchase_orders_service(data) {
    try {
        const res = await axios.post('/api/purchase-orders', data); // Use the correct API endpoint for purchase orders
        return res.data; // Return the full response, you may adjust this based on your API's response structure
    } catch (error) {
        // Handle errors as needed
        console.error('Error creating purchase order:', error);
        throw error; // Rethrow the error to handle it in the component or thunk
    }
}

export const fetch_purchase_orders_service = async () => {
    const response = await axios.get('/api/purchase-orders'); // Update the URL as per your API
    return response.data; // Return the data from the response
};