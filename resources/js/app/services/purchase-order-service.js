import axios from 'axios';

// Utility function for handling errors
const handleError = (error) => {
    if (axios.isAxiosError(error)) {
        // Handle known axios errors
        console.error('Axios error:', error.message);
        throw new Error(error.response?.data?.message || 'An unexpected error occurred.');
    } else {
        // Handle other types of errors
        console.error('Error:', error);
        throw new Error('An unexpected error occurred.');
    }
};

export async function create_purchase_orders_service(data) {
    try {
        const res = await axios.post('/api/purchase-orders', data);
        return res.data; // Return the full response
    } catch (error) {
        handleError(error); // Handle error using the utility function
        throw error; // Ensure error is propagated
    }
}

export const fetch_purchase_orders_service = async () => {
    try {
        const response = await axios.get('/api/purchase-orders');
        return response.data; // Return the data from the response
    } catch (error) {
        handleError(error); // Handle error using the utility function
        throw error; // Ensure error is propagated
    }
};

export async function fetch_purchase_order_by_id_service(id) {
    try {
        const response = await axios.get(`/api/purchase-orders/${id}`);
        return response.data; // Return the data from the response
    } catch (error) {
        handleError(error); // Handle error using the utility function
        throw error; // Ensure error is propagated
    }
}
