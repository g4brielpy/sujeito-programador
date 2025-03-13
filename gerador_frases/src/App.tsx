import "./App.css";

import { ButtonCategoria } from "./components/ButtonCategoria";
import { ButtonFrase } from "./components/ButtonFrase";

function App() {
  return (
    <>
      <main className="main-principal">
        <div className="max-conteudo">
          <img src="/src/assets/logo.png" alt="Dev Frases" />
          <section className="section-categoria">
            <h2>Categorias</h2>
            <div>
              <ButtonCategoria>Motivação</ButtonCategoria>
              <ButtonCategoria>Bom Dia</ButtonCategoria>
            </div>
          </section>
          <ButtonFrase>Gerar Frase</ButtonFrase>
        </div>
      </main>
    </>
  );
}

export default App;
