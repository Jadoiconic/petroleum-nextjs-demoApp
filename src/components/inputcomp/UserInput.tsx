"use client";
import React from "react";

interface InputProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  type: string;
  placeholder?: string;
  value:string | undefined
}

const UserInput: React.FC<InputProps> = ({ label,value, type,placeholder, onChange }) => {
  return (
    <div className="w-full py-2">
      {label && <div className="font-semibold text-xl">{label}</div>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="py-2 px-8 w-full border rounded"
      />
    </div>
  );
};

export default UserInput;
