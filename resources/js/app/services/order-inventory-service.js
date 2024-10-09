export async function fetch_order_inventory_service() {
    const res = await axios.get('/api/order-inventory')
    return res.data.response
}