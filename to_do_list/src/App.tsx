import { useState } from "react";
import "./App.css";

function App() {
  const [inputTarefa, setInputTarefa] = useState<string>("");

  return (
    <>
      <h1>Lista de Tarefas</h1>

      <form className="form">
        <input
          type="text"
          placeholder="Digite uma nova tarefa"
          onChange={(e) => setInputTarefa(e.target.value)}
        />
        <button type="submit">Adicionar</button>
      </form>
    </>
  );
}

export default App;
