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
        
            <div className="mt-6 border-t border-gray-100">
                <hr />
                <dl className="grid grid-cols-1 sm:grid-cols-2">
                    <div className="px-4 py-6 sm:col-span-1 sm:px-0">
                        <dt className="text-md font-medium leading-6 text-black">Account Name</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">{purchaseOrder.account?.name || 'N/A'}</dd>
                    </div>
                    <div className="px-4 py-6 sm:col-span-1 sm:px-0">
                        <dt className="text-md font-medium leading-6 text-black">Medical Rep</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">{purchaseOrder.medRep || 'N/A'}</dd>
                    </div>
                    <div className="px-4 py-6 sm:col-span-1 sm:px-0">
                        <dt className="text-md font-medium leading-6 text-black">Status</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">
                            <span
                                className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${
                                    purchaseOrder.status === 'Pending'
                                        ? 'bg-yellow-100 text-yellow-800'
                                        : purchaseOrder.status === 'Completed'
                                        ? 'bg-green-100 text-green-800'
                                        : purchaseOrder.status === 'Cancelled'
                                        ? 'bg-red-100 text-red-800'
                                        : 'bg-gray-100 text-gray-800'
                                }`}
                            >
                                {purchaseOrder.status || 'N/A'}
                            </span>
                        </dd>
                    </div>

                    <div className="px-4 py-6 sm:col-span-1 sm:px-0">
                        <dt className="text-md font-medium leading-6 text-black">Total Price</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">{totalPrice > 0 ? `₱${totalPrice.toFixed(2)}` : 'N/A'}</dd>
                    </div>
                    <div className=" px-4 py-6 sm:col-span-2 sm:px-0">
                        <hr className="mb-4" />
                        <dt className="text-xl font-medium leading-6 text-black ">Purchase Request</dt>
                        <dd className="mt-1 text-sm leading-6 text-black sm:mt-2">
                            <div className="flex justify-between gap-20 w-1/4 text-lg text-lime-900">
                                <div >
                                    Product Name
                                </div>
                                <div >
                                    Amount
                                </div>
                                <div >
                                    Price
                                </div>
                            </div>
                            <ul>
                                {purchaseOrder.order_items && purchaseOrder.order_items.length > 0 ? (
                                    purchaseOrder.order_items.map((item) => (
                                        <li key={item.id} className="flex justify-between gap-20 w-1/4">
                                            <div >
                                                <span>{item.product ? item.product.name : 'N/A'}</span>
                                            </div>
                                            <div >
                                                <span>{item.amount ? item.amount : 'N/A'}</span>
                                            </div>
                                            <div >
                                                <span>{item.price ? `₱${parseFloat(item.price).toFixed(2)}` : 'N/A'}</span>
                                            </div>
                                            {console.log('product', item.product)}
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
        
    );
}
