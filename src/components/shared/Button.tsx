import React, { FC } from "react";

interface ButtonProps {
  handleClick: (e?: any) => void;
  variant: "primary" | "secondary" | "danger" | "white";
  name: string;
  btnStyle?: string;
  isDisable?: boolean;
}
const buttonVariants = {
  primary: "bg-blue-500 hover:bg-blue-600 text-white",
  secondary: "bg-gray-500 hover:bg-gray-600 text-white",
  danger: "bg-red-500 hover:bg-red-600 text-white",
  white: "bg-white-500 hover:bg-white-600 text-black",
};
const Button: FC<ButtonProps> = ({
  handleClick,
  variant,
  name,
  btnStyle,
  isDisable = false,
}) => {
  return (
    <button
      className={`inline-flex items-center justify-center px-6 py-2 font-sans font-medium tracking-wide rounded-md transition-colors duration-300 ${buttonVariants[variant]} ${btnStyle} min-w-[100px]`}
      onClick={handleClick}
      disabled={isDisable}
    >
      {name}
    </button>
  );
};

export default Button;
