import React, { useState } from 'react'
import AdminLayout from '../../layout'
import { PaperClipIcon } from '@heroicons/react/20/solid'
import Modal from '@/app/components/modal';
import InputTextComponent from '@/app/components/input-text-component';
import InputLabelComponent from '@/app/components/input-label-component';

export default function ProductsShowPage() {

    const [isModalAttachmentOpen, setModalAttachmentOpen] = useState(false);

    const openModalAttachment = () => setModalAttachmentOpen(true);
    const closeModalAttachment = () => setModalAttachmentOpen(false);

    const [isModalEditOpen, setModalEditOpen] = useState(false);

    const openModalEdit = () => setModalEditOpen(true);
    const closeModalEdit = () => setModalEditOpen(false);


  return (
    <AdminLayout>
        <div className="relative bg-white p-5 rounded-lg shadow-md">
            <div className="flex justify-between">

                <div>
                    <h3 className="text-base font-semibold leading-7 text-gray-900">Product Information</h3>
                    <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Product description and files</p>
                </div>

                <div className="flex space-x-4">
                    <button className="block rounded-md bg-green-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={openModalAttachment}>
                    Add Attachments
                    </button>
                    <button className="block rounded-md bg-violet-500 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={openModalEdit}>
                    Edit
                    </button>
                </div>

                <Modal isOpen={isModalAttachmentOpen} onClose={closeModalAttachment}>

                <h2 className="text-xl font-semibold mb-4">Add Attachments</h2>
                <div className="mt-4">
                    <InputLabelComponent htmlFor="email" labelText="Attachment #1" />
                    <InputTextComponent
                        id="name"
                        name="name"
                        type="file"
                        required
                        autoComplete="name"
                        />
                </div>

                <div className="mt-4">
                    <InputLabelComponent htmlFor="email" labelText="Attachment #2" />
                    <InputTextComponent
                        id="epirydate"
                        name="epirydate"
                        type="file"
                        required
                        autoComplete="epirydate"
                        />
                </div>

                <div className="mt-4">
                    <InputLabelComponent htmlFor="email" labelText="Attachment #3" />
                    <InputTextComponent
                        id="amount"
                        name="amount"
                        type="file"
                        required
                        autoComplete="amount"
                        />
                </div>

                <button
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 mr-10"
                onClick={closeModalAttachment}
                >
                Close Modal
                </button>

                <button
                className="mt-4 px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-400"
                >
                Save Attachments
                </button>

                </Modal>

                <Modal isOpen={isModalEditOpen} onClose={closeModalEdit}>

                <h2 className="text-xl font-semibold mb-4">Edit Product Info</h2>
                <div className="mt-4">
                    <InputLabelComponent htmlFor="email" labelText="Product Name" />
                    <InputTextComponent
                        id="name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        />
                </div>

                <div className="mt-4">
                    <InputLabelComponent htmlFor="email" labelText="Expiry Date" />
                    <InputTextComponent
                        id="epirydate"
                        name="epirydate"
                        type="date"
                        required
                        autoComplete="epirydate"
                        />
                </div>

                <div className="mt-4">
                    <InputLabelComponent htmlFor="email" labelText="Amount" />
                    <InputTextComponent
                        id="amount"
                        name="amount"
                        type="text"
                        required
                        autoComplete="amount"
                        />
                </div>

                <button
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 mr-10"
                onClick={closeModalEdit}
                >
                Close Modal
                </button>

                <button
                className="mt-4 px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-400"
                >
                Save Changes
                </button>

                </Modal>

            </div>



            <div className="mt-6 border-t border-gray-100">
                <dl className="divide-y divide-gray-100">

                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Product name</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">ProductName01</dd>
                    </div>

                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Expiry Date</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">02/24/2025</dd>
                    </div>

                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Stock</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">1,500</dd>
                    </div>

                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">DR Date</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">01/02/2023</dd>
                    </div>

                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Description</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                        Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
                        </dd>
                    </div>

                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Attachments</dt>

                        <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                            <ul role="list" className="divide-y divide-gray-100 rounded-md border border-gray-200">

                                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                                    <div className="flex w-0 flex-1 items-center">
                                        <PaperClipIcon aria-hidden="true" className="h-5 w-5 flex-shrink-0 text-gray-400" />
                                        <div className="ml-4 flex min-w-0 flex-1 gap-2">
                                        <span className="truncate font-medium">resume_back_end_developer.pdf</span>
                                        <span className="flex-shrink-0 text-gray-400">2.4mb</span>
                                        </div>
                                    </div>

                                    <div className="ml-4 flex-shrink-0">
                                        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Download</a>
                                    </div>
                                    <div className="ml-4 flex-shrink-0">
                                        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Remove</a>
                                    </div>
                                </li>

                                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                                    <div className="flex w-0 flex-1 items-center">
                                        <PaperClipIcon aria-hidden="true" className="h-5 w-5 flex-shrink-0 text-gray-400" />
                                        <div className="ml-4 flex min-w-0 flex-1 gap-2">
                                        <span className="truncate font-medium">coverletter_back_end_developer.pdf</span>
                                        <span className="flex-shrink-0 text-gray-400">4.5mb</span>
                                        </div>
                                    </div>

                                    <div className="ml-4 flex-shrink-0">
                                        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Download</a>
                                    </div>
                                    <div className="ml-4 flex-shrink-0">
                                        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Remove</a>
                                    </div>
                                </li>

                            </ul>
                        </dd>

                    </div>
                </dl>
            </div>
        </div>
    </AdminLayout>
  )
}
