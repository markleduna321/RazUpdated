import React from 'react';

export default function InputSelectComponent({ id, name, products, value, onChange, index }) {
    // Ensure productOptions is always an array
    const productOptions = Array.isArray(products) ? products : [];

    return (
        <div>
            <label htmlFor={id} className="block text-sm font-medium text-gray-700">
                Product
            </label>
            <select
                id={id}
                name={name}
                value={value} // Should be the product ID
                onChange={(e) => onChange(e.target.value)} // Pass the selected product ID
                required
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
                <option value="">Select a product</option>
                {productOptions.length > 0 ? (
                    productOptions.map((product) => (
                        <option key={product.id} value={product.id}> {/* Use product.id as the value */}
                            {product.name}
                        </option>
                    ))
                ) : (
                    <option disabled>No products available</option>
                )}
            </select>
        </div>
    );
}
