import React, { useEffect, useState } from 'react';
import AdminLayout from '../../layout';
import { PaperClipIcon } from '@heroicons/react/20/solid';
import Button from '@/app/pages/components/button';
import { PencilSquareIcon } from '@heroicons/react/24/solid';
import AccountIDDetailsSection from './_sections/account-id-details-section';
import { useDispatch, useSelector } from 'react-redux';
import { get_accounts_by_id_thunk } from '../_redux/accounts-thunk';

export default function AccountsViewPage() {
    const account_id = window.location.pathname.split('/')[3];
    const dispatch = useDispatch();
    const { account, loading, error } = useSelector((state) => state.accounts);

    useEffect(() => {
        dispatch(get_accounts_by_id_thunk(account_id));
    }, [dispatch, account_id]);

    if (loading) {
        return <div>Loading...</div>; // Show loading state
    }

    if (error) {
        return <div>Error fetching account: {error.message}</div>; // Show error message
    }

    return (
        <AdminLayout>
            <div className="relative bg-white p-5 rounded-lg shadow-md">
                <div className="flex justify-between">
                    <div className="px-4 sm:px-0">
                        <h3 className="text-base font-semibold leading-7 text-gray-900">Account Information</h3>
                        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Personal details and application.</p>
                    </div>
                    <div className="mt-4 sm:ml-16 sm:mt-0 flex gap-4">
                    <div>
                        <Button
                            type="button"
                            variant="primary"
                            size="md"
                            isLoading={false}
                            disabled={false}
                            icon={<PencilSquareIcon className="h-5 w-5" />}
                        >
                            Edit
                        </Button>
                        </div>
                    </div>
                </div>

                <AccountIDDetailsSection account={account} /> {/* Pass the account data */}
            </div>
        </AdminLayout>
    );
}
