import React, { useState } from 'react'
import AdminLayout from '../layout'
import ProductTableSection from './_sections/product-table-section'
import Modal from '@/app/components/modal';





export default function AdminProducts() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  return (
    
    <AdminLayout>
    
    <div className="p-4">
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        onClick={openModal}
      >
        Open Modal
      </button>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2 className="text-xl font-semibold mb-4">Modal Title</h2>
        <p>This is the content of the modal.</p>
        <button
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
          onClick={closeModal}
        >
          Close Modal
        </button>
      </Modal>
    </div>
        <ProductTableSection/>
    </AdminLayout>
  )
}
