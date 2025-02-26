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

  function deletarTarefa(index: number): void {
    const tarefasAtualizadas: string[] = tarefas.filter((tarefa, i) => {
      if (index != i) {
        return tarefa;
      }
    });

    setTarefas(tarefasAtualizadas);
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
          value={inputTarefa}
        />
        <button type="submit">Adicionar</button>
      </form>

      {tarefas.length > 0 && (
        <section>
          <ul className="lista-tarefas">
            {tarefas.map((tarefa, index) => (
              <li key={index}>
                <strong>{tarefa}</strong> -{" "}
                <button onClick={() => deletarTarefa(index)}>Excluir</button>{" "}
                <button onClick={() => console}>Atualizar</button>
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
}

export default App;
