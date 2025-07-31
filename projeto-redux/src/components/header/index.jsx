import { Link, useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { logoutUser } from "../../redux/user/slice";
import { useDispatch } from "react-redux";

import styles from "./header.module.css";

export function Header() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  function handleLogin() {
    navigate("/");
  }

  function handleLogout() {
    dispatch(logoutUser());
    navigate("/");
  }

  return (
    <header>
      <div className={styles.content}>
        <Link to="/painel">
          <h1>
            Dev<span>Redux</span>
          </h1>
        </Link>

        {user?.name ? (
          <button className={styles.logout} onClick={handleLogout}>
            Sair
          </button>
        ) : (
          <button className={styles.login} onClick={handleLogin}>
            Fazer login
          </button>
        )}
      </div>
    </header>
  );
}
