import InputLabelComponent from '@/app/pages/components/input-label-component';
import InputTextComponent from '@/app/pages/components/input-text-component';
import Modal from '@/app/pages/components/modal';
import Button from '@/app/pages/components/button'; 
import { PlusIcon, XMarkIcon } from '@heroicons/react/24/outline';
import React, { useState, useEffect } from 'react';
import InputSelectComponent from '../_components/input-select-component';
import { useDispatch, useSelector } from 'react-redux';
import { get_products_thunk } from '../../products/_redux/products-thunk';

export default function PurchaseOrderCreateSection() {
    const [isModalOpen, setModalOpen] = useState(false);
    const [orderItems, setOrderItems] = useState([{ product: '', price: '' }]);

    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.products); // Get products from Redux store
    const productsLoading = useSelector((state) => state.products.status === 'loading');
    const productsError = useSelector((state) => state.products.error);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    useEffect(() => {
        // dispatch(get_products_for_purchase_order_thunk());
        dispatch(get_products_thunk()); // Fetch products when component mounts
    }, [dispatch]);

    const handleInputChange = (index, field, value) => {
        const updatedItems = [...orderItems];
        updatedItems[index][field] = value;
        setOrderItems(updatedItems);
    };

    const addNewProductPrice = () => {
        setOrderItems([...orderItems, { product: '', price: '' }]);
    };

    const removeProductPrice = (index) => {
        const updatedItems = [...orderItems];
        updatedItems.splice(index, 1);
        setOrderItems(updatedItems);
    };

    return (
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <Button variant="primary" onClick={openModal} icon={<PlusIcon className="h-5 w-5" />}>
                New PO
            </Button>

            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <h2 className="text-xl font-semibold mb-4">Purchase Order Form</h2>

                {productsLoading && <p>Loading products...</p>}
                {productsError && <p>Error loading products: {productsError}</p>}
                {!productsLoading && !productsError && (
                    <div>
                        <InputLabelComponent htmlFor="accountName" labelText="Account Name" />
                        <InputTextComponent
                            id="accountName"
                            name="accountName"
                            type="text"
                            required
                            autoComplete="name"
                        />
                    </div>
                )}

                {orderItems.map((item, index) => (
                    <div key={index} className="flex gap-4">
                        <InputSelectComponent
                            id={`product-${index}`}
                            name="product"
                            products={products} // Ensure products is an array
                            value={item.product}
                            onChange={handleInputChange}
                            index={index}
                        />

                        <div>
                            <InputLabelComponent htmlFor={`price-${index}`} labelText="Price" />
                            <InputTextComponent
                                id={`price-${index}`}
                                name="price"
                                type="number"
                                value={item.price}
                                onChange={(e) => handleInputChange(index, 'price', e.target.value)}
                                required
                                autoComplete="price"
                            />
                        </div>

                        {orderItems.length > 1 && (
                            <Button variant="danger" onClick={() => removeProductPrice(index)}>
                                <XMarkIcon className="h-5 w-5" />
                            </Button>
                        )}
                    </div>
                ))}

                <div className="mt-4">
                    <Button variant="secondary" onClick={addNewProductPrice}>
                        Add Product
                    </Button>
                </div>

                <div className="flex justify-end gap-4 mt-4">
                    <Button variant="primary">Save</Button>
                    <Button variant="danger" onClick={closeModal}>
                        <XMarkIcon className="h-5 w-5" />
                    </Button>
                </div>
            </Modal>
        </div>
    );
}
