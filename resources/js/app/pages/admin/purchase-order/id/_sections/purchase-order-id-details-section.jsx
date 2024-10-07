import React from 'react';
import { useSelector } from 'react-redux';
import { selectPurchaseOrder, selectLoading, selectError } from '../../_redux/purchase-order-slice'; // Adjust the path

export default function PurchaseOrderIDDetailsSection() {
    const purchaseOrder = useSelector(selectPurchaseOrder); // Use selector to access purchase order
    const loading = useSelector(selectLoading); // Use selector to access loading state
    const error = useSelector(selectError); // Use selector to access error state

    console.log('Purchase Orders State:', { purchaseOrder, loading, error }); // Log current state

    // Handle loading state
    if (loading) {
        return <p>Loading...</p>;
    }

    // Handle error state
    if (error) {
        return <p>Error: {error}</p>;
    }

    // Check if purchaseOrder exists
    if (!purchaseOrder || Object.keys(purchaseOrder).length === 0) {
        return <p>No purchase order details available.</p>;
    }

    // Calculate total price from order items if needed
    const totalPrice = purchaseOrder.orderItems
        ? purchaseOrder.orderItems.reduce((acc, item) => acc + parseFloat(item.price || 0), 0)
        : 0;

    return (
        <div>
            <div className="px-4 sm:px-0">
                <h3 className="text-base font-semibold leading-7 text-gray-900">Purchase Order Information</h3>
                <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Details of the purchase order.</p>
            </div>
            <div className="mt-6">
                <dl className="grid grid-cols-1 sm:grid-cols-2">
                    <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Account Name</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">{purchaseOrder.account?.name || 'N/A'}</dd>
                    </div>
                    <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Medical Rep</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">{purchaseOrder.medRep || 'N/A'}</dd>
                    </div>
                    <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Status</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">{purchaseOrder.status || 'N/A'}</dd>
                    </div>
                    <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Total Price</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">{totalPrice > 0 ? `$${totalPrice.toFixed(2)}` : 'N/A'}</dd>
                    </div>
                    <div className="border-t border-gray-100 px-4 py-6 sm:col-span-2 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Products</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">
                            <ul>
                            {purchaseOrder.order_items && purchaseOrder.order_items.length > 0 ? (
                                purchaseOrder.order_items.map((item) => (
                                    <li key={item.id} className="flex justify-between">
                                        <span>{item.product ? item.product.name : 'N/A'}</span>
                                        <span>{item.price ? `$${parseFloat(item.price).toFixed(2)}` : 'N/A'}</span>
                                    </li>
                                ))
                            ) : (
                                <li>No products found.</li>
                            )}
                            </ul>
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
    );
}
