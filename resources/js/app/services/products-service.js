export async function get_products_service() {
    const res = await axios.get('/api/products')
    return res.data.response
}

export async function get_products_by_id_service(id) {
    const res = await axios.get('/api/products/' +id )
    return res.data.response
}


export async function create_products_service(data) {
    const res = await axios.post('/api/products',data)
    return res.data.response
}

