import React, { useState } from 'react'
import Modal from '@/app/components/modal'
import InputTextComponent from '@/app/components/input-text-component';
import InputLabelComponent from '@/app/components/input-label-component';
import Button from '@/app/components/button';
import { PlusIcon, XMarkIcon } from '@heroicons/react/24/solid';


const people = [
  { name: 'ProductNam01', title: '02/24/2026', email: '1500', role: '01/02/2023' },
  // More people...
]

export default function ProductTableSection() {
  
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    
    <div className="px-4 sm:px-6 lg:px-8 bg-white rounded-lg shadow-md pt-3">

      <div className="sm:flex sm:items-center">

        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">Products</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the products in your account including their name, title, email and role.
          </p>
        </div>

        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          
        <Button 
        type="primary"
        size="md"  
        isLoading={false} 
        disabled={false} 
        icon={<PlusIcon className="h-5 w-5" />}  // Add the PlusIcon here
        onClick={openModal}
        >
          New Product
        </Button>

          <Modal isOpen={isModalOpen} onClose={closeModal}>

            <h2 className="text-xl font-semibold mb-4">Add Product</h2>
              <div>
                <InputLabelComponent htmlFor="email" labelText="Product Name" />
                <InputTextComponent
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    />
              </div>

              <div>
                <InputLabelComponent htmlFor="email" labelText="Expiry Date" />
                <InputTextComponent
                    id="epirydate"
                    name="epirydate"
                    type="date"
                    required
                    autoComplete="epirydate"
                    />
              </div>

              <div>
                <InputLabelComponent htmlFor="email" labelText="Amount" />
                <InputTextComponent
                    id="amount"
                    name="amount"
                    type="text"
                    required
                    autoComplete="amount"
                    />
              </div>

              <div className='flex justify-end gap-4'>
                
                  <Button 
                      type="primary" 
                      size="md"
                      isLoading={false}
                      disabled={false}
                      >
                      Save
                  </Button>
                
                  <Button 
                      type="danger"
                      size='md'
                      isLoading={false}
                      disabled={false}
                      onClick={closeModal}
                      >{<XMarkIcon className="h-5 w-5" />}</Button>
                
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
                    Product Name
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Expiry Date
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Stock
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    DR Date
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
                      <a href="/admin/products/id" className="text-indigo-600 hover:text-indigo-900">
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
