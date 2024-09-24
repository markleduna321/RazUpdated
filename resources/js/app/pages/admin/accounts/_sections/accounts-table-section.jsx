import Button from '@/app/components/button';
import InputLabelComponent from '@/app/components/input-label-component';
import InputTextComponent from '@/app/components/input-text-component';
import Modal from '@/app/components/modal';
import React, {useState} from 'react'

const people = [
    { name: 'James Pharmacy', title: 'San Carlos City', email: 'Pharmacy', role: '01/02/2023' },
    { name: 'SanDoc', title: 'San Carlos City', email: 'Hospital', role: '01/02/2023' },
    // More people...
  ]

export default function AccountsTableSection() {

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="px-4 sm:px-6 lg:px-8 bg-white rounded-lg shadow-md pt-3">

      <div className="sm:flex sm:items-center">

        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">Accounts</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the accounts in your.
          </p>
        </div>

        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          
          <Button type="primary" onClick={openModal}>Add Account</Button>

          <Modal isOpen={isModalOpen} onClose={closeModal}>
          <h2 className="text-xl font-semibold mb-4">Add Product</h2>
              <div className="mt-4">
                <InputLabelComponent htmlFor="email" labelText="Account Name" />
                <InputTextComponent
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    />
              </div>

              <div className="mt-4">
                <InputLabelComponent htmlFor="email" labelText="Type" />
                <InputTextComponent
                    id="epirydate"
                    name="epirydate"
                    type="select"
                    required
                    autoComplete="epirydate"
                    />
              </div>

              <div className="mt-4">
                <InputLabelComponent htmlFor="email" labelText="Address" />
                <InputTextComponent
                    id="amount"
                    name="amount"
                    type="text"
                    required
                    autoComplete="amount"
                    />
              </div>

            <button
              className="mt-4 px-3  4 py-2 bg-red-500 text-white rounded hover:bg-red-700 mr-10"
              onClick={closeModal}
            >
              Close Modal
            </button>

            <button
              className="mt-4 px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-400"
            >
              Add Product
            </button>
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
                {people.map((person) => (
                  <tr key={person.email}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                      {person.name}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.title}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.email}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.role}</td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                      <a href="/products/show" className="text-indigo-600 hover:text-indigo-900">
                        View<span className="sr-only">, {person.name}</span>
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
  )
}
