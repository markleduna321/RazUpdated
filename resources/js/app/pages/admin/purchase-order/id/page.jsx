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
            <PurchaseOrderIDDetailsSection />
        </AdminLayout>
    );
}
