import type React from "react";
import type { MyTextProps } from "../../types/TypeTextField";

const MyText: React.FC<MyTextProps> = ({
  variant = "default",
  children = "MyText",
  className = "",
}) => {
  let baseClasses = "poppins-regular text-gray-800";
  let variantClasses = "";

  switch (variant) {
    case "title":
      variantClasses = "poppins-bold text-2xl";
      break;
    case "subtitle":
      variantClasses = "poppins-medium text-lg text-gray-600";
      break;
    default:
      variantClasses = "poppins-regular text-base";
  }

  return (
    <span className={`${baseClasses} ${variantClasses} ${className}`}>
      {children}
    </span>
  );
};

export default MyText;