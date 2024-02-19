import React, { ReactNode } from "react";

interface SearchProps {
  className?: string;
  children?: ReactNode;
  placeholder?: string;
  value?: string | null; // Optional value prop
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void; // Required onChange prop
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void; // Optional onKeyDown prop
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
}
export default function Search({
  className,
  children,
  placeholder,
  value,
  onClick,
  onChange,
  onKeyDown,
}: SearchProps) {
  return (
    <div className={`relative  rounded-lg px-2  ${className}`}>
      <input
        className="border-none w-full h-10  rounded-lg outline-none bg-transparent "
        onClick={onClick}
        placeholder={placeholder}
        value={value || ""}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />

      {children}
    </div>
  );
}
