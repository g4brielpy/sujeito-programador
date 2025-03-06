import "./App.css";

import { ButtonCategoria } from "./components/ButtonCategoria";

function App() {
  return (
    <>
      <main>
        <img src="/src/assets/logo.png" alt="Dev Frases" />
        <section>
          <h2>Categorias</h2>

          <div>
            <ButtonCategoria>Motivação</ButtonCategoria>
            <ButtonCategoria>Bom Dia</ButtonCategoria>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
