import InputLabelComponent from '@/app/pages/components/input-label-component';
import Modal from '@/app/pages/components/modal';
import Button from '@/app/pages/components/button'; 
import { PlusIcon, XMarkIcon } from '@heroicons/react/24/outline';
import React, { useState, useEffect } from 'react';
import InputSelectComponent from '../_components/input-select-component';
import InputSelectAccountComponent from '../_components/input-select-account-component'; // Import the new component
import { useDispatch, useSelector } from 'react-redux';
import { get_products_thunk } from '../../products/_redux/products-thunk';
import InputTextComponent from '@/app/pages/components/input-text-component';
import axios from 'axios';

export default function PurchaseOrderCreateSection() {
    const [isModalOpen, setModalOpen] = useState(false);
    const [orderItems, setOrderItems] = useState([{ product: '', price: '' }]);
    const [selectedAccount, setSelectedAccount] = useState(''); // State for selected account
    const [medRep, setMedRep] = useState('12345'); // Example medRep value
    const [status, setStatus] = useState('Pending');
    const [loading, setLoading] = useState(false); // Loading state
    const [error, setError] = useState(''); // Error state
    const [success, setSuccess] = useState(''); // Success message state

    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.products); // Get products from Redux store
    const productsLoading = useSelector((state) => state.products.status === 'loading');
    const productsError = useSelector((state) => state.products.error);

    const openModal = () => setModalOpen(true);
    const closeModal = () => {
        setModalOpen(false);
        setError(''); // Reset error state
        setSuccess(''); // Reset success state
    };

    useEffect(() => {
        dispatch(get_products_thunk()).then(() => {
            console.log('Fetched products:', products);
        });
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

    const handleSubmit = async () => {
        const payload = {
            account_id: selectedAccount,
            medRep,
            status,
            orderItems: orderItems.map(item => ({
                product_id: item.product, // This should now be the product ID
                price: item.price
            })),
        };
    
        try {
            const response = await axios.post('/api/purchase-orders', payload);
            console.log('Purchase order created successfully:', response.data);
            closeModal();
            setOrderItems([{ product: '', price: '' }]);
            setSelectedAccount('');
        } catch (error) {
            console.error('Error creating purchase order:', error.response.data);
        }
    };
    
    
    

    return (
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <Button variant="primary" onClick={openModal} icon={<PlusIcon className="h-5 w-5" />}>
                New PO
            </Button>

            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <h2 className="text-xl font-semibold mb-4">Purchase Order Form</h2>

                {/* Hidden inputs for medRep and status */}
                <input type="hidden" name="medRep" value={medRep} />
                <input type="hidden" name="status" value={status} />

                {productsLoading && <p>Loading products...</p>}
                {productsError && <p>Error loading products: {productsError}</p>}
                {!productsLoading && !productsError && (
                    <div>
                        <InputSelectAccountComponent
                            id="accountSelect"
                            name="accountName"
                            value={selectedAccount}
                            onChange={setSelectedAccount}
                            className="w-full"
                        />
                    </div>
                )}

{orderItems.map((item, index) => (
    <div key={index} className="flex items-center gap-4 mb-2">
        <div className="w-60 pt-1">
            <InputSelectComponent
                id={`product-${index}`}
                name="product"
                products={products} // Ensure products is an array
                value={item.product} // This should contain the product ID
                onChange={(value) => handleInputChange(index, 'product', value)} // Correctly passing the selected value (product ID)
                className="flex-grow" // Allow the product dropdown to take remaining space
            />
        </div>

        <div className="w-20"> {/* Set a fixed width for price input */}
            <InputLabelComponent htmlFor={`price-${index}`} labelText="Price" />
            <InputTextComponent
                id={`price-${index}`}
                name="price"
                type="number"
                value={item.price}
                onChange={(e) => handleInputChange(index, 'price', e.target.value)}
                required
                autoComplete="price"
                className="w-full" // Ensure price input takes full width of the container
            />
        </div>
        <div className="pt-6">
            {orderItems.length > 1 && (
                <Button variant="danger" onClick={() => removeProductPrice(index)}>
                    <XMarkIcon className="h-5 w-5" />
                </Button>
            )}
        </div>
    </div>
))}

                <div className="mt-4">
                    <Button variant="success" onClick={addNewProductPrice}>
                        Add Product
                    </Button>
                </div>

                <div className="flex justify-end gap-4 mt-4">
                    <Button variant="primary" onClick={handleSubmit} disabled={loading}>
                        {loading ? 'Saving...' : 'Save'}
                    </Button>
                    <Button variant="danger" onClick={closeModal}>
                        <XMarkIcon className="h-5 w-5" />
                    </Button>
                </div>

                {/* Display success or error message */}
                {error && <p className="text-red-500">{error}</p>}
                {success && <p className="text-green-500">{success}</p>}
            </Modal>
        </div>
    );
}
