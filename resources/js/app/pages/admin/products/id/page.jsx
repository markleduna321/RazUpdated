import React, { useEffect, useState } from 'react'
import AdminLayout from '../../layout'
import { PaperClipIcon, PencilSquareIcon, XMarkIcon } from '@heroicons/react/20/solid'
import Modal from '@/app/pages/components/modal';
import InputTextComponent from '@/app/pages/components/input-text-component';
import InputLabelComponent from '@/app/pages/components/input-label-component';
import Button from '@/app/pages/components/button';
import moment from 'moment';
import store from '@/app/store/store';
import { get_products_by_id_thunk } from '../_redux/products-thunk';
import ProductIDDetailsSection from './sections/product-id-details-section';

export default function ProductsShowPage() {
    const product_id = window.location.pathname.split('/')[3]
    const [isModalAttachmentOpen, setModalAttachmentOpen] = useState(false);
    const [product,setProduct] =useState({})
    const openModalAttachment = () => setModalAttachmentOpen(true);
    const closeModalAttachment = () => setModalAttachmentOpen(false);

    const [isModalEditOpen, setModalEditOpen] = useState(false);

    const openModalEdit = () => setModalEditOpen(true);
    const closeModalEdit = () => setModalEditOpen(false);


    useEffect(() => {
        store.dispatch(get_products_by_id_thunk(product_id))
    }, []);
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



                <ProductIDDetailsSection />
            </div>
        </AdminLayout>
    )
}
