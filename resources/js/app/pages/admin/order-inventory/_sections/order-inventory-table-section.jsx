import React from 'react'

export default function OrderInventoryTableSection() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 bg-white rounded-lg shadow-md pt-3">
      <div className="sm:flex sm:items-center">
      <div className="sm:flex-auto">
        <h1 className="text-2xl font-semibold leading-6 text-gray-900 underline decoration-pink-400 w-44 shadow-md">
          Order Inventory
        </h1>
        <p className="mt-2 text-sm text-gray-700">
          A list of all the products in your account including their name, expiry date, stock, and DR Date.
        </p>
    </div>



        
      </div>

      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                    Order ID
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Account Name
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Med Rep
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Status
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                    <span className="sr-only">View</span>
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                
                  <tr>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                      0001
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">James Pharmacy</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Mark Harvey</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Paid</td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                      <a href="" className="text-indigo-600 hover:text-indigo-900">
                        View<span className="sr-only"></span>
                      </a>
                    </td>
                  </tr>
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
