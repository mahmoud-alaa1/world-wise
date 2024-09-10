import styles from "./Sidebar.module.css";
import AppNav from "./AppNav";
import { Outlet } from "react-router-dom";

function Sidebar({ display, setDisplay }) {
  return (
    <div style={!display ? { display: "none" } : {}} className={styles.sidebar}>
      <button onClick={() => setDisplay(!display)} className={styles.close}>
        X
      </button>
      <AppNav />
      <Outlet />
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} by World Wise Inc.
        </p>
      </footer>
    </div>
  );
}

export default Sidebar;
