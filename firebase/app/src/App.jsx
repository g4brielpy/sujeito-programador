import { useState } from "react";
import { db } from "./utils/firebaseConnection";
import "./App.css";

function App() {
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");

  return (
    <>
      <h1>Utilizando Firebase Database</h1>

      <form action="#">
        <div className="box-input">
          <label htmlFor="titulo">Titulo: </label>
          <input
            type="text"
            placeholder="Titulo do post"
            id="titulo"
            value={titulo}
            onChange={(event) => setTitulo(event.target.value)}
          />
        </div>
        <div className="box-input">
          <label htmlFor="autor">Autor: </label>
          <input
            type="text"
            placeholder="Autor do post"
            id="autor"
            value={autor}
            onChange={(event) => setAutor(event.target.value)}
          />
        </div>
        <div className="container-buttons">
          <button
            onClick={(event) => {
              event.preventDefault();
              console.log("Titulo: " + titulo + " - Autor: " + autor);
            }}
          >
            Cadastrar post
          </button>
          <button>Buscas posts</button>
        </div>
      </form>
    </>
  );
}

export default App;
