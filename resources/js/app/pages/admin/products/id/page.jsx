import React, { useState } from 'react'
import AdminLayout from '../../layout'
import { PaperClipIcon, PencilSquareIcon, XMarkIcon } from '@heroicons/react/20/solid'
import Modal from '@/app/components/modal';
import InputTextComponent from '@/app/components/input-text-component';
import InputLabelComponent from '@/app/components/input-label-component';
import Button from '@/app/components/button';

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

                <div className="flex flex-none gap-4">
                <Button 
                    type="button"
                    variant="info" 
                    size="sm"
                    isLoading={false}
                    disabled={false}
                    icon={<PaperClipIcon className="h-5 w-5" />}
                    onClick={openModalAttachment}
                    >
                    Attachements
                    </Button>

                    <Button 
                    type="button"
                    variant="primary"
                    size="sm" 
                    isLoading={false}
                    disabled={false}
                    icon={<PencilSquareIcon className="h-5 w-5" />}
                    onClick={openModalEdit}
                    >
                    Edit
                    </Button>
                </div>

                <Modal isOpen={isModalAttachmentOpen} onClose={closeModalAttachment}>

                <h2 className="text-xl font-semibold mb-4">Add Attachments</h2>
                <div>
                    <InputLabelComponent htmlFor="email" labelText="Attachment #1" />
                    <InputTextComponent
                        id="name"
                        name="name"
                        type="file"
                        required
                        autoComplete="name"
                        />
                </div>

                <div>
                    <InputLabelComponent htmlFor="email" labelText="Attachment #2" />
                    <InputTextComponent
                        id="epirydate"
                        name="epirydate"
                        type="file"
                        required
                        autoComplete="epirydate"
                        />
                </div>

                <div>
                    <InputLabelComponent htmlFor="email" labelText="Attachment #3" />
                    <InputTextComponent
                        id="amount"
                        name="amount"
                        type="file"
                        required
                        autoComplete="amount"
                        />
                </div>

                <div className='flex gap-4 justify-end'>
                    <Button 
                    variant="primary"
                    >
                    Save
                    </Button>

                    <Button 
                    variant="danger" 
                    onClick={closeModalAttachment}
                    >
                        {<XMarkIcon className="h-5 w-5" />}
                        </Button>
                    
                </div>

                </Modal>

                <Modal isOpen={isModalEditOpen} onClose={closeModalEdit}>

                <h2 className="text-xl font-semibold mb-4">Edit Product Info</h2>
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
                
                <div className="flex justify-end gap-4">
                    <Button variant="primary">Save</Button>
                    <Button variant="danger" onClick={closeModalEdit}>{<XMarkIcon className="h-5 w-5" />}</Button>
                </div>
                
                
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
