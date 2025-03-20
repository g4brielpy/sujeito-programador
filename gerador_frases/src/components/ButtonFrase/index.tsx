import React from "react";
import "./index.css";

interface ButtonFraseProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function ButtonFrase({ children, ...rest }: ButtonFraseProps) {
  return (
    <button className="button-frase" {...rest}>
      {children}
    </button>
  );
}
