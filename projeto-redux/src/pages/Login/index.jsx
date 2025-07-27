import { useState } from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { createrUser } from "../../redux/user/slice";
import { useDispatch } from "react-redux";

import styles from "./login.module.css";

export function Login() {
  const dispatch = useDispatch();
  const { user } = useSelector((rootReducers) => rootReducers.user);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    dispatch(
      createrUser({
        name,
        email,
      })
    );
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Link to="/painel">
          <h1 className={styles.title}>Dev Login</h1>
        </Link>

        <form onSubmit={handleLogin} className={styles.form}>
          <input
            type="text"
            className={styles.input}
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Digite seu nome...."
          />
          <input
            type="text"
            className={styles.input}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Digite seu email..."
          />

          <button type="submit">Acessar</button>
        </form>
      </main>
    </div>
  );
}
