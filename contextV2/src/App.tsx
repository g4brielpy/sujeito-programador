import { AlunoContext } from "./contexts/AlunoContext";
import { useContext } from "react";

import "./App.css";

export default function App() {
  const aluno = useContext(AlunoContext);

  if (!aluno) {
    return <h2>Dados indisponíveis</h2>;
  }

  return (
    <>
      <h1>Aluno</h1>
      <h2>Nome: {aluno.nome}</h2>
    </>
  );
}
