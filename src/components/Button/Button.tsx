import React from 'react'
import type { ButtonProps } from '../../types/TypeTextField';

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  className = "",
  icon,
  iconAlt = "icon",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full bg-cyan-500 text-white py-2 rounded hover:bg-cyan-600 transition flex items-center justify-center space-x-2 cursor-pointer ${className}`}
    >
      {icon && <img src={icon} alt={iconAlt} className="w-5 h-5" />}
      <span>{children}</span>
    </button>
  );
};

export default Button