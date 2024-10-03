import React, { useState } from 'react';
import { PlusIcon, XMarkIcon } from '@heroicons/react/24/solid';
import axios from 'axios';
import store from '@/app/store/store';
import { create_products_thunk, get_products_thunk } from '../_redux/products-thunk';
import Button from '@/app/pages/components/button';
import InputLabelComponent from '@/app/pages/components/input-label-component';
import InputTextComponent from '@/app/pages/components/input-text-component';
import Modal from '@/app/pages/components/modal';

export default function ProductCreateSection() {
    const [isModalOpen, setModalOpen] = useState(false);
    const [newAgent, setNewAgent] = useState({
        name: '',
        expirydate: '',
        stock: '',
    });

    // Open and close modal functions
    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewAgent((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newAgentData = {
                name: newAgent.name,
                expiry_date: newAgent.expirydate,  // Match API naming
                stock: newAgent.amount,
            };
           await store.dispatch(create_products_thunk(newAgentData))
           await store.dispatch(get_products_thunk())
           closeModal();
        } catch (error) {
            console.error('Error saving product:', error);
        }
    };

    return (
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <Button
                type="button"
                variant="primary"
                size="md"
                isLoading={false}
                disabled={false}
                icon={<PlusIcon className="h-5 w-5" />}
                onClick={openModal}
            >
                New Product
            </Button>

            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <h2 className="text-xl font-semibold mb-4">Add Product</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <InputLabelComponent htmlFor="name" labelText="Product Name" />
                        <InputTextComponent
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={newAgent.name}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-4">
                        <InputLabelComponent htmlFor="expirydate" labelText="Expiry Date" />
                        <InputTextComponent
                            id="expirydate"
                            name="expirydate" // Match this with the state key
                            type="date"
                            required
                            value={newAgent.expirydate}  // Bind state value
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-4">
                        <InputLabelComponent htmlFor="amount" labelText="Stock" />
                        <InputTextComponent
                            id="amount"
                            name="amount"
                            type="number"
                            required
                            value={newAgent.stock}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="flex justify-end gap-4">
                        <Button
                            type="submit"
                            variant="primary"
                            size="md"
                            isLoading={false}
                            disabled={false}
                        >
                            Save
                        </Button>

                        <Button
                            type="button"
                            variant="danger"
                            size="md"
                            isLoading={false}
                            disabled={false}
                            onClick={closeModal}
                        >
                            <XMarkIcon className="h-5 w-5" />
                        </Button>
                    </div>
                </form>
            </Modal>
        </div>
    );
}
