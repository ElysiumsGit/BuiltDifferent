import type React from "react";
import { FiSearch } from "react-icons/fi";
import type { TextFieldSearchProps } from "../../types/TypeTextField";

const TextFieldSearch: React.FC<TextFieldSearchProps> = ({
  value,
  onChange,
  placeholder = "Search...",
}) => {
  return (
    <div className="flex items-center bg-[#1e1e1e] text-sm text-gray-700 px-4 py-2 rounded-md flex-1">
        <FiSearch className="text-gray-400 mr-2" size={16} />
        <input
            type="text"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="bg-transparent focus:outline-none placeholder:text-gray-400 w-full"
        />
    </div>
  );
};

export default TextFieldSearch;
