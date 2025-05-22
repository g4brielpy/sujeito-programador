import "./App.css";

import { useContext, useState } from "react";
import { AuthContext } from "./contexts/AuthContext";

function App() {
  const [inputUser, setInputUser] = useState<string>("");

  const auth = useContext(AuthContext);
  if (!auth) {
    return <div>Loading...</div>;
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (inputUser.trim() === "") {
      alert("Digite um nome válido");
      return;
    }

    auth.login(inputUser);
    setInputUser("");
  };

  return (
    <>
      <h1>Context User</h1>
      <br />
      <h2>Olá {auth?.user || "Visitante"}</h2>
      <form
        onSubmit={handleLogin}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          border: "1px solid black",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        <h3>Faça Login</h3>
        <input
          type="text"
          placeholder="Digite seu nome"
          value={inputUser}
          onChange={(e) => setInputUser(e.target.value)}
          style={{
            padding: "12px 10px",
            borderRadius: "5px",
            border: "1px solid black",
            fontSize: "16px",
          }}
        />

        <button>Login</button>
        <button type="button" onClick={auth.logout}>
          Deslogar
        </button>
      </form>
    </>
  );
}

export default App;
