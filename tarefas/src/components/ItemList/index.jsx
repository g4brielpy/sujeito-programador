import PropTypes from "prop-types";
import styles from "./index.module.css";

export function ItemList({ children }) {
  return <li className={styles.itens}>{children}</li>;
}

ItemList.propTypes = {
  children: PropTypes.node,
};
