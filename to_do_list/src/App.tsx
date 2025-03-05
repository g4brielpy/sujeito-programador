import { useEffect, useRef, useState, useMemo } from "react";
import "./App.css";

interface editaProps {
  enabled: boolean;
  tarefa: string;
  index: number | null;
}

function App() {
  const renderRef: React.RefObject<number> = useRef(0);
  const inputTarefaRef = useRef<HTMLInputElement>(null);

  const [inputTarefa, setInputTarefa] = useState<string>("");
  const [tarefas, setTarefas] = useState<string[]>([]);
  const [edita, setEdita] = useState<editaProps>({
    enabled: false,
    tarefa: "",
    index: null,
  });

  const totalDeTarefas: number = useMemo(() => tarefas.length, [tarefas]);

  function adicionarTarefa(): void {
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

  function atualizarTarefa(tarefa: string, index: number): void {
    setInputTarefa(tarefa);
    inputTarefaRef.current?.focus();
    setEdita({
      enabled: true,
      tarefa: tarefa,
      index: index,
    });
  }

  function salvarAtualizacao(): void {
    const tarefasAtualizadas: string[] = tarefas.map((oldTarefa, oldIndex) => {
      if (oldIndex == edita.index) {
        return inputTarefa;
      }

      return oldTarefa;
    });

    setTarefas(tarefasAtualizadas);
    setInputTarefa("");
    setEdita({
      enabled: false,
      tarefa: "",
      index: null,
    });
  }

  useEffect(() => {
    const buscarTarefasStore: string | null = localStorage.getItem("@tarefas");

    if (buscarTarefasStore) setTarefas(JSON.parse(buscarTarefasStore));
  }, []);

  useEffect(() => {
    // Não execultar esse Effect na primeira renderização, pois vai setar a lista de tarefas vazia
    if (renderRef.current == 0) {
      renderRef.current += 1;
      return;
    }

    localStorage.setItem("@tarefas", JSON.stringify(tarefas));
  }, [tarefas]);

  return (
    <>
      <h1>Lista de Tarefas</h1>

      <form
        className="form"
        onSubmit={(e: React.FormEvent) => {
          e.preventDefault();
          if (edita.enabled) {
            salvarAtualizacao();
          } else {
            adicionarTarefa();
          }
        }}
      >
        <input
          type="text"
          placeholder="Digite uma nova tarefa"
          onChange={(e) => setInputTarefa(e.target.value)}
          value={inputTarefa}
          ref={inputTarefaRef}
        />
        <button type="submit">
          {edita.enabled ? "Atualizar" : "Adicionar"}
        </button>
      </form>

      {tarefas.length > 0 && (
        <section>
          <h3>Total de tarefas: {totalDeTarefas}</h3>
          <ul className="lista-tarefas">
            {tarefas.map((tarefa, index) => (
              <li key={index}>
                <strong>{tarefa}</strong>
                <div>
                  <button onClick={() => deletarTarefa(index)}>Excluir</button>{" "}
                  <button onClick={() => atualizarTarefa(tarefa, index)}>
                    Atualizar
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
}

export default App;
