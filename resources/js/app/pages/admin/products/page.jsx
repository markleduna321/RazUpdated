import React, { useEffect } from 'react'
import AdminLayout from '../layout'
import ProductTableSection from './_sections/product-table-section'
import store from '@/app/store/store';
import { get_products_thunk } from './_redux/products-thunk';





export default function AdminProducts() {

  useEffect(() => {
    store.dispatch(get_products_thunk())
  }, []);
  return (
    <AdminLayout>
        <ProductTableSection/>
    </AdminLayout>
  )
}
