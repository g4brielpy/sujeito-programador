import "./App.css";

function App() {
  function handleButtonTarefa(event) {
    event.preventDefault();
  }

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
              placeholder="Digite um nova tarefa"
            />
            <button type="submit">Adicionar</button>
          </div>
        </form>
      </main>
    </>
  );
}

export default App;
