import { create_products_service, get_products_by_id_service, get_products_service } from '@/app/services/products-service';
import { productsSlice } from './products-slice';

export function get_products_thunk() {
    return async function (dispatch, getState) {
        const result = await get_products_service()
        dispatch(productsSlice.actions.setProducts(result));
    };
}

export function get_products_by_id_thunk(product_id) {
    return async function (dispatch, getState) {
        const result = await get_products_by_id_service(product_id)
        dispatch(productsSlice.actions.setProduct(result));
    };
}


export function create_products_thunk(data) {
    return async function (dispatch, getState) {
        const result = await create_products_service(data)
        return result
    };
}
