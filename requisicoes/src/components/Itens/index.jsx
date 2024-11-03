import React from "react";
import styles from "./index.module.css";

export function Itens({ children, image }) {
  return (
    <li className={styles.conteiner}>
      <div className={styles.image}>
        <img src={image} />
      </div>
      <div className={styles.conteudo}>{children}</div>
    </li>
  );
}
