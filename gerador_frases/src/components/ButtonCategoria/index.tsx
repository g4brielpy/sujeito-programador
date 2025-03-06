import React from "react";
import "./index.css";

interface ButtonCategoriaProps {
  children: React.ReactNode;
}

export function ButtonCategoria({ children }: ButtonCategoriaProps) {
  return <button className="button-categoria">{children}</button>;
}
