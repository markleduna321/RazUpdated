import React, { useState } from 'react';
import Modal from '@/app/components/modal';
import InputTextComponent from '@/app/components/input-text-component';
import InputLabelComponent from '@/app/components/input-label-component';
import Button from '@/app/components/button';
import { PlusIcon, XMarkIcon } from '@heroicons/react/24/solid';
import axios from 'axios';

export default function ProductCreateSection() {
    const [isModalOpen, setModalOpen] = useState(false);
    const [newAgent, setNewAgent] = useState({
        name: '',
        expirydate: '',
        amount: '',
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
                amount: newAgent.amount,
            };

            console.log("Submitting data:", newAgentData); // Add this line for debugging

            // Send POST request to the backend API
            const response = await axios.post('/api/products', newAgentData);

            console.log('Response:', response); // Debug the response

            if (response.status >= 200 && response.status < 300) {
                // Successfully created product
                console.log('Product created successfully:', response.data);
                
                // Reset form and close modal
                setNewAgent({
                    name: '',
                    expirydate: '',
                    amount: '',
                });
                closeModal();
            } else {
                console.error('Failed to create product. Status:', response.status);
            }
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
                        <InputLabelComponent htmlFor="amount" labelText="Amount" />
                        <InputTextComponent
                            id="amount"
                            name="amount"
                            type="text"
                            required
                            value={newAgent.amount}
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
