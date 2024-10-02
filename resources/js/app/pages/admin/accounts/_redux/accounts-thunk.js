import { create_accounts_service, get_accounts_service } from '@/app/services/accounts-service';
import {accountsSlice} from './accounts-slice';


export function create_accounts_thunk(data) {
    return async function (dispatch, getState) {
        const result = await create_accounts_service(data)
        return result
    };
}

export function get_accounts_thunk() {
    return async function (dispatch, getState) {
        const result = await get_accounts_service()
        console.log('result',result)
        dispatch(accountsSlice.actions.setAccounts(result));
    };
}

