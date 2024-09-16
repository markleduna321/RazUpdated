import React from 'react'
import AdminLayout from '../layout'
import AdminDashboardCardSection from './_sections/admin-dashboard-card-section'
import AdminUpdatesSection from './_sections/admin-updates-section'

export default function AdminDashboard() {
  return (
    <AdminLayout>
        
        <AdminDashboardCardSection/>

        <div class=" mt-14 rounded-lg bg-white px-4 pb-12 pt-5 shadow-lg sm:px-6 sm:pt-6">
            <AdminUpdatesSection/>
        </div>
        
    </AdminLayout>
  )
}
