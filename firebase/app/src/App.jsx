import { useState, useEffect } from "react";
import { db, auth } from "./utils/firebaseConnection";

import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";

import "./App.css";

function App() {
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [postId, setPostId] = useState("");
  const [documentos, setDocumentos] = useState([]);

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const colRef = collection(db, "posts");
    const unsubscribe = onSnapshot(colRef, (snapshot) => {
      const documentosAtualizados = snapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }));

      setDocumentos(documentosAtualizados);
    });

    return () => unsubscribe();
  }, []);

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

  async function handleDel() {
    try {
      const docRef = doc(db, "posts", postId);
      await deleteDoc(docRef);

      setPostId("");
      alert("Deletado com sucesso!");
    } catch (e) {
      console.log("Erro " + e);
    }
  }

  async function handleAddUser() {
    try {
      await createUserWithEmailAndPassword(auth, email, senha);
      alert("Usuário cadastrado com sucesso!");

      setEmail("");
      setSenha("");
    } catch (e) {
      console.log("Erro " + e);
    }
  }

  async function handleGetUser() {}

  return (
    <>
      <h1>Utilizando Firebase Database</h1>

      <section className="container-login">
        <h2>Usuários</h2>
        <div className="box-input">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            placeholder="Digite seu email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="box-input">
          <label htmlFor="senha">Senha: </label>
          <input
            type="password"
            placeholder="Digite sua senha"
            id="senha"
            value={senha}
            onChange={(event) => setSenha(event.target.value)}
          />
        </div>
        <div className="container-buttons">
          <button onClick={handleAddUser}>Cadastrar usuário</button>
        </div>
      </section>
      <main>
        <h2>Posts</h2>
        <form>
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
          <br />
          <div className="box-input">
            <label htmlFor="idpost">Id post: </label>
            <input
              type="text"
              placeholder="Atualizar ou Deletar"
              id="idpost"
              value={postId}
              onChange={(event) => setPostId(event.target.value)}
            />
          </div>
          <div className="container-buttons">
            <button onClick={handleAdd}>Cadastrar post</button>
            <button onClick={handleGet}>Buscar posts</button>
            <br />
            <button onClick={handleUpg}>Atualizar post</button>
            <button onClick={handleDel}>Excluir post</button>
          </div>
        </form>

        {documentos.map((doc) => (
          <div key={doc.id} style={{ margin: "4rem 0" }}>
            <p>ID: {doc.id}</p>
            <h3>Título: {doc.data.titulo}</h3>
            <h4>Autor: {doc.data.autor}</h4>
          </div>
        ))}
      </main>
    </>
  );
}

export default App;
