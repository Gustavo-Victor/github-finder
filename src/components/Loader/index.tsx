import { FaSpinner } from "react-icons/fa";
import styles from "./style.module.scss";

function Loader() {
  return <FaSpinner className={styles.loader_icon} />;
}

export default Loader;
