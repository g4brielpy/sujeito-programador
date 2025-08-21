import { Header } from "../../components/header";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { delAddress, fetchUsers } from "../../redux/user/slice";
import { useDispatch } from "react-redux";

import styles from "./home.module.css";

export function Home() {
  const dispatch = useDispatch();
  const { user, users, loading } = useSelector(
    (rootReducers) => rootReducers.user
  );

  function handleDeleteAddress() {
    dispatch(delAddress());
    alert("Endereço deletado com sucesso!");
  }

  function handleFetchUsers() {
    console.log("Clicou no Fetch");

    dispatch(fetchUsers());
  }

  return (
    <>
      <Header />
      <div className={styles.container}>
        <nav className={styles.nav}>
          <Link to="/" className={styles.link}>
            Login
          </Link>
          <Link to="/painel" className={styles.link}>
            Painel
          </Link>
          <Link to="/address" className={styles.link}>
            Meus endereços
          </Link>
        </nav>

        <main className={styles.content}>
          <div className={styles.message}>
            <h1 className={styles.title}>
              Olá {user?.name ? user.name : "Visitante"}, bem vindo!
            </h1>
            {user?.email && <span>Email: {user.email}</span>}

            {user?.address && (
              <>
                <strong className={styles.addressLabel}>Endereço atual:</strong>
                <div className={styles.address}>
                  <p>
                    {user.address.name}, N° {user.address.number}
                  </p>

                  <button onClick={handleDeleteAddress} disabled={loading}>
                    Deletar endereço
                  </button>
                </div>
              </>
            )}
          </div>

          <hr />
          <div className={styles.message}>
            <h1 className={styles.title}>Lista de Usuários</h1>

            <strong className={styles.addressLabel}>
              <button
                onClick={handleFetchUsers}
                className={styles.link}
                disabled={loading}
              >
                {loading ? "Carregando..." : "Busca usuários"}
              </button>
            </strong>

            {users.length > 0 && (
              <section
                style={{
                  marginTop: "28px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "18px",
                }}
              >
                {users.map((user) => (
                  <p key={user.id}>
                    {user.id} | {user.name}
                  </p>
                ))}
              </section>
            )}
          </div>
        </main>
      </div>
    </>
  );
}
