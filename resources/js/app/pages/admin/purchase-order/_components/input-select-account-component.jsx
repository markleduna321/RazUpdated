import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { get_accounts_thunk } from '../../accounts/_redux/accounts-thunk'; // Import your accounts thunk

export default function InputSelectAccountComponent({ id, name, value, onChange, className }) {
    const dispatch = useDispatch();
    const accounts = useSelector((state) => state.accounts.accounts); // Get accounts from Redux store
    const accountsLoading = useSelector((state) => state.accounts.status === 'loading');
    const accountsError = useSelector((state) => state.accounts.error);

    useEffect(() => {
        dispatch(get_accounts_thunk()); // Fetch accounts when component mounts
    }, [dispatch]);

    return (
        <div className={className}>
            <label htmlFor={id} className="block text-sm font-medium text-gray-700">
                Account Name
            </label>
            {accountsLoading && <p>Loading accounts...</p>}
            {accountsError && <p>Error loading accounts: {accountsError}</p>}
            {!accountsLoading && !accountsError && (
                <select
                    id={id}
                    name={name}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required
                >
                    <option value="">Select an account</option>
                    {accounts.map((account) => (
                        <option key={account.id} value={account.id}>
                            {account.name}
                        </option>
                    ))}
                </select>
            )}
        </div>
    );
}
