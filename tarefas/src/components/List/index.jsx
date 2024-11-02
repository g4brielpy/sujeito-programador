import PropTypes from "prop-types";
import styles from "./index.module.css"

export function List({ children }) {
  return <ul className={styles.list}>{children}</ul>;
}

List.propTypes = {
  children: PropTypes.node,
};
