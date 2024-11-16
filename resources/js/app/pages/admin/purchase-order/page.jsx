import React, { useEffect } from 'react'
import AdminLayout from '../layout'
import PurchaseOrderTableSection from './_sections/purchase-order-table-section'
import store from '@/app/store/store';
import { get_products_thunk } from '../products/_redux/products-thunk';
import { get_accounts_thunk } from '../accounts/_redux/accounts-thunk';
import { fetch_purchase_orders_thunk } from './_redux/purchase-order-thunk';

export default function PurchaseOrderPage() {
  useEffect(() => {
    store.dispatch(get_products_thunk()); // Fetch products
    store.dispatch(get_accounts_thunk()); // Fetch accounts
    store.dispatch(fetch_purchase_orders_thunk()); // Fetch purchase orders
  }, []);

  return (
    <AdminLayout>
        <PurchaseOrderTableSection/>
    </AdminLayout>
  )
}
