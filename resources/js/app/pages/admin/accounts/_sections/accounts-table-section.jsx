import React from 'react';
import AccountCreateSection from './account-create-section';
import { useSelector } from 'react-redux';
import moment from 'moment';

export default function AccountsTableSection() {
  const { accounts } = useSelector((store) => store.accounts);

  function handleAccountAdded(params) {
    // Handle account addition here
  }

  // Function to get badge styles based on account type
  const getBadgeStyle = (type) => {
    switch (type) {
      case 'Hospital':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'Pharmacy':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 bg-white rounded-lg shadow-md pt-3">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-2xl font-semibold leading-6 text-gray-900 underline decoration-yellow-400 w-24 shadow-md">
            Accounts
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the accounts in your system.
          </p>
        </div>
        <AccountCreateSection onProductAdded={handleAccountAdded} />
      </div>

      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                    Account Name
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Address
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Type
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Date added
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                    <span className="sr-only">View</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {accounts.map((account) => (
                  <tr key={account.id}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                      {account.name}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{account.address}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      <span className={`text-xs font-medium me-2 px-2.5 py-0.5 rounded ${getBadgeStyle(account.type)}`}>
                        {account.type || 'N/A'}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{moment(account.created_at).format('LLL')}</td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                      <a href={`/admin/accounts/${account.id}`} className="text-indigo-600 hover:text-indigo-900">
                        View<span className="sr-only">, {account.name}</span>
                      </a>
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
