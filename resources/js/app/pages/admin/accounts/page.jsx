import React, { useEffect } from 'react'
import AdminLayout from '../layout'
import AccountsTableSection from './_sections/accounts-table-section'
import { get_accounts_thunk } from './_redux/accounts-thunk';
import store from '@/app/store/store';

export default function AccountsPage() {

  useEffect(() => {
    store.dispatch(get_accounts_thunk())
  }, []);
  return (
    <AdminLayout>
        <AccountsTableSection/>
    </AdminLayout>
  )
}
