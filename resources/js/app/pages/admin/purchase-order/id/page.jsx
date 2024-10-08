import React, { useEffect } from 'react';
import AdminLayout from '../../layout';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'; // Import useParams to extract URL params
import { fetch_purchase_order_by_id_thunk } from '../_redux/purchase-order-thunk';
import PurchaseOrderIDDetailsSection from './_sections/purchase-order-id-details-section';
import store from '@/app/store/store';

export default function PurchaseOrderDetailsPage() {
    const id = window.location.pathname.split('/')[3]

    console.log('id:', id);
    
    useEffect(() => {
        store.dispatch(fetch_purchase_order_by_id_thunk(id))
    }, []);

    return (
        <AdminLayout>
            <div className="relative bg-white p-5 rounded-lg shadow-md">
                <div className="px-4 sm:px-0">
                    <h3 className="text-2xl font-semibold leading-7 text-gray-900">Purchase Order Details</h3>
                    <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Details of the purchase order.</p>
                </div>
                <PurchaseOrderIDDetailsSection />
            </div>
            
        </AdminLayout>
    );
}
