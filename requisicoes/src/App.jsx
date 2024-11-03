import { useState, useEffect } from "react";
import { Itens } from "./components/Itens";
import "./App.css";

function App() {
  const [nutri, setNutri] = useState([]);
  const URL = "https://sujeitoprogramador.com/rn-api/?api=posts";

  useEffect(() => {
    const fetchAPI = fetch(URL)
      .then((response) => response.json())
      .then((data) => setNutri(data))
      .catch((erro) => console.log("Erro na requisição: " + erro));
  }, []);

  return (
    <>
      <h1>Requisições HTPPS com React</h1>

      <div>
        <h2>Receitas Nutris</h2>
        {nutri && (
          <ul style={{ listStyleType: "none" }}>
            {nutri.map((item, index) => (
              <Itens image={item.capa} key={item.id}>
                <h3>{item.titulo}</h3>
                <h4>{item.subtitulo}</h4>
                <p>{item.categoria}</p>
              </Itens>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default App;
