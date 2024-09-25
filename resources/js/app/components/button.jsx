import { ReactElement } from 'react';

const Button = ({ 
  type = 'primary', 
  size = 'md', 
  disabled = false, 
  isLoading = false, 
  icon = null, 
  children, 
  ...props 
}) => {
  const baseStyles = 'rounded focus:outline-none focus:ring transition duration-300 inline-flex items-center justify-center';
  
  const typeStyles = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-gray-500 text-white hover:bg-gray-600',
    warning: 'bg-yellow-500 text-black hover:bg-yellow-600',
    danger: 'bg-red-500 text-white hover:bg-red-600',
    info: 'bg-teal-500 text-white hover:bg-teal-600',
    success: 'bg-green-500 text-white hover:bg-green-600',
  };
  
  const sizeStyles = {
    sm: 'px-2 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  const disabledStyles = 'opacity-50 cursor-not-allowed';
  
  return (
    <button 
      className={`
        ${baseStyles} 
        ${sizeStyles[size]} 
        ${typeStyles[type]} 
        ${disabled ? disabledStyles : ''}`} 
      disabled={disabled} 
      {...props}
    >
      {isLoading ? (
        <span className="loader mr-2"></span>  
      ) : null}
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
