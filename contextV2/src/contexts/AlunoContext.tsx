import { createContext, type ReactNode } from "react";

interface AlunoContextProps {
  nome: string;
  idade: number;
  turno: "manhã" | "tarde" | "noite";
}

export const AlunoContext = createContext<AlunoContextProps | null>(null);

export function AlunoProvider({ children }: { children: ReactNode }) {
  return (
    <AlunoContext.Provider
      value={{ idade: 20, nome: "Gabriel", turno: "manhã" }}
    >
      {children}
    </AlunoContext.Provider>
  );
}
