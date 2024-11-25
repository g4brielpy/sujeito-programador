import { useState } from "react";

import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "./utils/firebaseConnection";

import "./App.css";

function App() {
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");

  function handleAdd() {
    const docRef = collection(db, "posts");
    addDoc(docRef, {
      titulo: titulo,
      autor: autor,
    }).then(console.log("Cadastrado com sucesso!"));

    setTitulo("");
    setAutor("");
  }

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
          <button onClick={handleAdd}>Cadastrar post</button>
          <button>Buscas posts</button>
        </div>
      </form>
    </>
  );
}

export default App;
