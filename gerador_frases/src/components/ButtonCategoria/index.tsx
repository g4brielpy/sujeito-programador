import React from "react";
import "./index.css";

interface ButtonCategoriaProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function ButtonCategoria({ children, ...rest }: ButtonCategoriaProps) {
  return (
    <button className="button-categoria" {...rest}>
      {children}
    </button>
  );
}
