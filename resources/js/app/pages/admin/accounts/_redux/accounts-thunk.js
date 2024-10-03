import { 
    create_accounts_service, 
    get_accounts_by_id_service, 
    get_accounts_service 
} from '@/app/services/accounts-service';
import { accountsSlice } from './accounts-slice';

export function create_accounts_thunk(data) {
    return async function (dispatch) {
        try {
            const result = await create_accounts_service(data);
            // Optionally dispatch a success action or return result
            return result;
        } catch (error) {
            console.error('Error creating account:', error);
            // Optionally dispatch an error action
        }
    };
}

export function get_accounts_thunk() {
    return async function (dispatch) {
        try {
            const result = await get_accounts_service();
            console.log('Fetched accounts:', result);
            dispatch(accountsSlice.actions.setAccounts(result));
        } catch (error) {
            console.error('Error fetching accounts:', error);
            // Optionally dispatch an error action
        }
    };
}

export function get_accounts_by_id_thunk(account_id) {
    return async function (dispatch) {
        try {
            const result = await get_accounts_by_id_service(account_id);
            dispatch(accountsSlice.actions.setAccount(result)); // Assuming you have setAccount for a single account
        } catch (error) {
            console.error('Error fetching account by ID:', error);
            // Optionally dispatch an error action
        }
    };
}
