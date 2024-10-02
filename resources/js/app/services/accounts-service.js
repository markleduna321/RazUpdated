export async function create_accounts_service(data) {
    const res = await axios.post('/api/accounts',data)
    return res.data.response
}

export async function get_accounts_service() {
    const res = await axios.get('/api/accounts')
    return res.data.response
}