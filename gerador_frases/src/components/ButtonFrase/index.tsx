import React from "react";
import "./index.css";

interface ButtonFraseProps {
  children: React.ReactNode;
}

export function ButtonFrase({ children }: ButtonFraseProps) {
  return <button className="button-frase">{children}</button>;
}
