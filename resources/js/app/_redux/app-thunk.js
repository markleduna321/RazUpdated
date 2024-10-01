import { appSlice } from './app-slice';

export function addCartProducts(product_id) {
  return async function (dispatch, getState) {
    dispatch(appSlice.actions.incrementByAmount(10));
  
  };
}
