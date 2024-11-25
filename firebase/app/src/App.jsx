import { useState } from "react";

import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db } from "./utils/firebaseConnection";

import "./App.css";

function App() {
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [postId, setPostId] = useState("");
  const [documentos, setDocumentos] = useState([]);

  function handleAdd() {
    const docRef = collection(db, "posts");
    addDoc(docRef, {
      titulo: titulo,
      autor: autor,
    }).then(console.log("Cadastrado com sucesso!"));

    setTitulo("");
    setAutor("");
  }

  async function handleGet() {
    try {
      const docRef = collection(db, "posts");
      const snapshot = await getDocs(docRef);
      const docAtualizados = snapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }));

      setDocumentos(docAtualizados);
    } catch (e) {
      console.log("Erro " + e);
    }
  }

  async function handleUpg() {
    try {
      const docRef = doc(db, "posts", postId);
      await updateDoc(docRef, {
        titulo: titulo,
        autor: autor,
      });

      setAutor("");
      setTitulo("");
      setPostId("");
    } catch (e) {
      console.log("Erro " + e);
    }
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
        <div className="box-input">
          <label htmlFor="idpost">Id post: </label>
          <input
            type="text"
            placeholder="Somente para atualizar"
            id="idpost"
            value={postId}
            onChange={(event) => setPostId(event.target.value)}
          />
        </div>
        <div className="container-buttons">
          <button onClick={handleAdd}>Cadastrar post</button>
          <button onClick={handleGet}>Buscar posts</button>
          <button onClick={handleUpg}>Atualizar post</button>
        </div>
      </form>

      {documentos.map((doc) => (
        <div key={doc.id} style={{ margin: "4rem 0" }}>
          <p>ID: {doc.id}</p>
          <h3>Título: {doc.data.titulo}</h3>
          <h4>Autor: {doc.data.autor}</h4>
        </div>
      ))}
    </>
  );
}

export default App;
