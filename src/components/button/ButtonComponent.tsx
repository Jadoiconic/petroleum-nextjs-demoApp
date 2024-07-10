"use client"
import React from "react";

interface ButtonProps {
  label: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const ButtonComponent: React.FC<ButtonProps> = ({ label, disabled, onClick }) => {
  return (
    <button
      className="py-3 rounded w-full my-2 font-bold px-8 bg-green-600 text-white"
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default ButtonComponent;
