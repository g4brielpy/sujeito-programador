import "./App.css";

import { useState } from "react";

import { ButtonCategoria } from "./components/ButtonCategoria";
import { ButtonFrase } from "./components/ButtonFrase";
import { frases } from "./db";

function App() {
  const [indexCategoria, setIndexCategoria] = useState<number>(0);
  const [fraseSelecionada, setFraseSelecionada] = useState<string>("");

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

          {fraseSelecionada != "" && (
            <p className="texto-frase">{fraseSelecionada}</p>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
