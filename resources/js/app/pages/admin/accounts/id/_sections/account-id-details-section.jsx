import React from 'react';
import moment from 'moment';
import { useSelector } from 'react-redux';

export default function AccountIDDetailsSection() {
    const { account } = useSelector((store) => store.accounts);  
    console.log('Account details:', account); // Debugging output

    // Handle case where account data might not be available yet
    if (!account) {
        return <div>Loading account details...</div>; // Loading state
    }

    return (
        <div className="mt-6 border-t border-gray-100">
            <dl className="divide-y divide-gray-100"> 
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">Account Name</dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{account.name || 'N/A'}</dd>
                </div>

                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">Address</dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{account.address || 'N/A'}</dd>
                </div>

                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">Type</dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{account.type || 'N/A'}</dd>
                </div>

                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">Date</dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                        {account.created_at ? moment(account.created_at).format('LLL') : 'N/A'}
                    </dd>
                </div>
            </dl>
        </div>
    );
}
