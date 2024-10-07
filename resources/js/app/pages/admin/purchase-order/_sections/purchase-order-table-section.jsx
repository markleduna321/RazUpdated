import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import PurchaseOrderCreateSection from './purchase-order-create-section';
import store from '@/app/store/store';
import { get_products_thunk } from '../../products/_redux/products-thunk';
import { get_accounts_thunk } from '../../accounts/_redux/accounts-thunk';
import { fetch_purchase_orders_thunk } from '../_redux/purchase-order-thunk';

export default function PurchaseOrderTableSection() {
  // Get the products and purchase orders from the Redux store
  const products = useSelector((state) => state.products.products);
  const purchaseOrders = useSelector((state) => state.purchase_orders.purchase_orders); // Corrected selector
  const accounts = useSelector((state) => state.accounts.accounts);

  useEffect(() => {
    store.dispatch(get_products_thunk()); // Fetch products
    store.dispatch(get_accounts_thunk()); // Fetch accounts
    store.dispatch(fetch_purchase_orders_thunk()); // Fetch purchase orders
  }, []);

  return (
    <div className="px-4 sm:px-6 lg:px-8 bg-white rounded-lg shadow-md pt-3">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-2xl font-semibold leading-6 text-gray-900 underline decoration-teal-400 w-44 shadow-md">
            Purchase Order
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the Purchase Orders.
          </p>
        </div>
        <PurchaseOrderCreateSection />
      </div>

      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                    PO Number
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Account
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Medical Rep.
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Status
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Action
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                    <span className="sr-only">View</span>
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                {purchaseOrders.map((order, index) => (
                  <tr key={order.id}>
                    <td className="py-4 pl-4 pr-3 text-sm text-gray-900 sm:pl-0">{order.id}</td>
                    <td className="px-3 py-4 text-sm text-gray-900">{order.account.name}</td>
                    <td className="px-3 py-4 text-sm text-gray-900">{order.medRep}</td>
                    <td className="px-3 py-4 text-sm text-gray-900">{order.status}</td>
                    <td className="px-3 py-4 text-sm text-gray-900">
                      <a href={`/admin/purchase/${order.id}`} className="text-indigo-600 hover:text-indigo-900">View</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
