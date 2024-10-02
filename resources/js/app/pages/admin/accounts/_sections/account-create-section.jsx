import React, {useState} from 'react'
import Button from '@/app/pages/components/button';
import InputLabelComponent from '@/app/pages/components/input-label-component';
import InputTextComponent from '@/app/pages/components/input-text-component';
import Modal from '@/app/pages/components/modal';
import axios from 'axios';
import { PlusIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { create_accounts_thunk, get_accounts_thunk } from '../_redux/accounts-thunk';
import store from '@/app/store/store';
import SelectComponent from '@/app/pages/components/input-select';

export default function AccountCreateSection() {
    const [isModalOpen, setModalOpen] = useState(false);
    const [newAgent, setNewAgent] = useState({
        name: '',
        address: '',
        type: '',
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
                address: newAgent.address,  // Match API naming
                type: newAgent.type,
            };
           await store.dispatch(create_accounts_thunk(newAgentData))
           await store.dispatch(get_accounts_thunk())
           closeModal();
        } catch (error) {
            console.error('Error saving product:', error);
        }
    };

    const typeOptions = [
        { value: 'hospital', label: 'Hospital' },
        { value: 'pharmacy', label: 'Pharmacy' },
      ];

  return (
    <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          
          <Button variant="primary" onClick={openModal} icon={<PlusIcon className="h-5 w-5" />}>New Account</Button>

          <Modal isOpen={isModalOpen} onClose={closeModal}>
          <h2 className="text-xl font-semibold mb-4">Add Account</h2>
          <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <InputLabelComponent htmlFor="name" labelText="Account Name" />
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
                <InputLabelComponent htmlFor="address" labelText="Address" />
                <InputTextComponent
                    id="address"
                    name="address"
                    type="text"
                    required
                    value={newAgent.address}
                    onChange={handleChange}
                    />
              </div>

              <div className="mb-4">
                <InputLabelComponent htmlFor="type" labelText="Type" />
                <SelectComponent
                    id="type"
                    name="type"
                    value={newAgent.type}
                    onChange={handleChange}
                    options={typeOptions}
                    required
                    />
              </div>

              <div className='flex justify-end gap-4'>
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
  )
}
