import { useState } from "react";
import "./App.css";

function App() {
  const [inputTarefa, setInputTarefa] = useState<string>("");
  const [tarefas, setTarefas] = useState<string[]>([]);

  function adicinarTarefa(): void {
    if (inputTarefa == "") {
      return;
    }

    setTarefas((prevTarefas) => [...prevTarefas, inputTarefa]);
    setInputTarefa("");
  }

  return (
    <>
      <h1>Lista de Tarefas</h1>

      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          adicinarTarefa();
        }}
      >
        <input
          type="text"
          placeholder="Digite uma nova tarefa"
          onChange={(e) => setInputTarefa(e.target.value)}
        />
        <button type="submit">Adicionar</button>
      </form>

      {tarefas.length > 0 && (
        <section>
          <ul className="lista-tarefas">
            {tarefas.map((tarefa, index) => (
              <li key={index}>{tarefa}</li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
}

export default App;
