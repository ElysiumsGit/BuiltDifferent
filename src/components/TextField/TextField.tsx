import React from 'react';
import type { TextFieldProps } from "../../types/TypeTextField.tsx";

const TextField: React.FC<TextFieldProps> = ({
    label,
    type,
    value,
    onChange,
    placeholder,
    name,
}) => {
  return (
    <div className="flex flex-col mb-4 ">
      <label className="mb-1 text-sm font-medium text-gray-700">{label}</label>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="px-4 py-2 border-2 border-cyan-400 rounded-md focus:outline-none focus:border-cyan-600 transition-colors w-full"
      />
    </div>
  );
}

export default TextField;
