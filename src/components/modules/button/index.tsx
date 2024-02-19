import React, { CSSProperties, ReactNode } from "react";

interface ButtonProps {
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;

}

export default function Button({ className, style, children , onClick }: ButtonProps) {
  return (
    <>
      <button onClick={onClick} className={` outline-none capitalize ${className}`} style={style}>
        {children}
      </button>
    </>
  );
}
