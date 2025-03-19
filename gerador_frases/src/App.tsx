import "./App.css";

import { ButtonCategoria } from "./components/ButtonCategoria";
import { ButtonFrase } from "./components/ButtonFrase";

import { frases } from "./db";

function App() {
  return (
    <>
      <main className="main-principal">
        <div className="max-conteudo">
          <img className="logo" src="/src/assets/logo.png" alt="Dev Frases" />
          <section className="section-categoria">
            <h2>Categorias</h2>
            <div>
              {frases.map((item, index) => (
                <ButtonCategoria key={item.id}>{item.nome}</ButtonCategoria>
              ))}
            </div>
            <ButtonFrase>Gerar Frase</ButtonFrase>
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
