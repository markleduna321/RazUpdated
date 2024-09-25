import React from 'react'
import AdminLayout from '../layout'
import PurchaseOrderTableSection from './_sections/purchase-order-table-section'

export default function PurchaseOrderPage() {
  return (
    <AdminLayout>
        <PurchaseOrderTableSection/>
    </AdminLayout>
  )
}
