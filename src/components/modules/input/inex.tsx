import React from "react";

type ValidationFunction = (value: string) => boolean;

interface InputProps {
  className: string;
  type: string;
  name?: string;
  placeholder?: string;
  label?: string;
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
  children?: React.ReactNode | null;
  validate?: any;
  [otherProps: string]: any; // Additional props
}

export default function Input({
  className,
  type,
  placeholder,
  label,
  name,
  onClick,
  children,
  validate,
  ...rest
}: InputProps) {
  return (
    <div className="relative flex flex-col   gap-y-[1px]">
      {label && <label>{label}</label>}
      <input
        name={name}
        className={`px-2 outline-none ${className}`}
        type={type}
        placeholder={placeholder}
        onClick={onClick}
        {...rest}
        {...validate}
      />

      {children ? children : null}
    </div>
  );
}
