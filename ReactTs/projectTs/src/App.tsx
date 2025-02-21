import { useState } from "react";
import "./App.css";

interface AlunoProps {
  nome: string;
  idade: number;
}

function App() {
  const [nome, setNome] = useState<string>("");
  const [idade, setIdade] = useState<number>(0);

  const [inforAluno, setInforAluno] = useState<AlunoProps>();

  return (
    <>
      <h1>React + TypeScript</h1>

      <div>
        <h2>Aluno</h2>
        <div className="input-group">
          <input
            type="text"
            placeholder="Digite seu nome"
            name="nome"
            onChange={(e) => setNome(e.target.value)}
          />
          <input
            type="number"
            name="idade"
            id="idade"
            placeholder="Digite sua idade"
            onChange={(e) => setIdade(Number(e.target.value))}
          />
        </div>
        <button
          onClick={() => {
            setInforAluno({ nome, idade });
          }}
        >
          Salvar
        </button>

        {inforAluno ? (
          <div>
            <h3>Informações</h3>
            <p>Nome: {inforAluno.nome}</p>
            <p>Idade: {inforAluno.idade}</p>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default App;
