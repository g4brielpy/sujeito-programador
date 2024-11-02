import "./App.css";

import { List } from "./components/List";
import { ItemList } from "./components/ItemList";
import { useState, useEffect } from "react";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [inputTaks, setInputTaks] = useState("");

  function handleButtonTarefa(event) {
    event.preventDefault();

    if (inputTaks.length) {
      setTasks((prevTasks) => [...prevTasks, inputTaks]);
    } else {
      alert("Tarefa inválida");
    }
    setInputTaks("");
  }

  useEffect(() => {
    const tasksStorage = JSON.parse(localStorage.getItem("@tarks"));

    if (tasksStorage) {
      setTasks(tasksStorage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("@tarks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
      <h1>Lista de Tarefas com React</h1>

      <main>
        <form onSubmit={handleButtonTarefa}>
          <div className="box-input">
            <input
              type="text"
              name="tarefa"
              id="inputTarefa"
              value={inputTaks}
              placeholder="Digite um nova tarefa"
              onChange={(event) => setInputTaks(event.target.value)}
            />
            <button type="submit">Adicionar</button>
          </div>

          <List>
            {tasks.length
              ? tasks.map((task, index) => (
                  <ItemList key={index}>{task}</ItemList>
                ))
              : "Não existe"}
          </List>
        </form>
      </main>
    </>
  );
}
