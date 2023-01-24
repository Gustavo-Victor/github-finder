import { Outlet } from "react-router-dom";
import styles from "./styles/modules/App.module.scss";

function App() {
  return (
    <div className={styles.app}>
      <h1>Github Finder</h1>
      <Outlet />
    </div>
  );
}

export default App;
