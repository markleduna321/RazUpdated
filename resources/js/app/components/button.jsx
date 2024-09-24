import React from 'react';

const Button = ({ type = 'primary', children, ...props }) => {
  const baseStyles = 'px-4 py-2 rounded focus:outline-none focus:ring transition duration-300';
  const typeStyles = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-gray-500 text-white hover:bg-gray-600',
    warning: 'bg-yellow-500 text-black hover:bg-yellow-600',
    danger: 'bg-red-500 text-white hover:bg-red-600',
    info: 'bg-teal-500 text-white hover:bg-teal-600',
  };

  return (
    <button className={`${baseStyles} ${typeStyles[type]}`} {...props}>
      {children}
    </button>
  );
};

export default Button;