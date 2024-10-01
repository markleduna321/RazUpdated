import Button from '@/app/pages/components/button';
import InputLabelComponent from '@/app/pages/components/input-label-component';
import InputTextComponent from '@/app/pages/components/input-text-component';
import Modal from '@/app/pages/components/modal';
import { PlusIcon, XMarkIcon } from '@heroicons/react/24/outline';
import React, {useState} from 'react'

const people = [
  { name: '001', title: 'James Pharmacy', email: 'San Carlos', role: 'Mark Harvey', status: 'Pending' },
  { name: '002', title: 'James Pharmacy', email: 'San Carlos', role: 'Mark Harvey', status: 'Approved' },
  { name: '003', title: 'James Pharmacy', email: 'San Carlos', role: 'Mark Harvey', status: 'Denied' },
  // More people...
]


export default function PurchaseOrderTableSection() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  return (
    <div className="px-4 sm:px-6 lg:px-8 bg-white rounded-lg shadow-md pt-3">

      <div className="sm:flex sm:items-center">

        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">Purchase Orders</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the Purchase Orders.
          </p>
        </div>

        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          
          <Button variant="primary" onClick={openModal} icon={<PlusIcon className="h-5 w-5" />}>New PO</Button>

          <Modal isOpen={isModalOpen} onClose={closeModal}>
          <h2 className="text-xl font-semibold mb-4">Add Account</h2>
              <div>
                <InputLabelComponent htmlFor="email" labelText="Account Name" />
                <InputTextComponent
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    />
              </div>

              <div>
                <InputLabelComponent htmlFor="email" labelText="Type" />
                <InputTextComponent
                    id="epirydate"
                    name="epirydate"
                    type="select"
                    required
                    autoComplete="epirydate"
                    />
              </div>

              <div>
                <InputLabelComponent htmlFor="email" labelText="Address" />
                <InputTextComponent
                    id="amount"
                    name="amount"
                    type="text"
                    required
                    autoComplete="amount"
                    />
              </div>

              <div className='flex justify-end gap-4'>
                <Button variant="primary">Save</Button>

                <Button variant="danger" onClick={closeModal}>
                  <XMarkIcon className="h-5 w-5" />
                  </Button>
              </div>
          </Modal>
          
        </div>
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
                    Address
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
                {people.map((person) => (
                  <tr key={person.email}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                      {person.name}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.title}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.email}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.role}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    <span class="bg-pink-100 text-pink-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300">{person.status}</span>
                    </td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                      <div className="flex gap-4">
                      <div>
                      <a href="/admin/accounts/id" className="text-indigo-600 hover:text-indigo-900">
                        Update<span className="sr-only">, {person.name}</span>
                      </a>
                      </div>
                      <div>
                      <a href="/admin/accounts/id" className="text-indigo-600 hover:text-indigo-900">
                        View<span className="sr-only">, {person.name}</span>
                      </a>
                      </div>
                      </div>
                      
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </div>
      </div>

    </div>
  )
}
