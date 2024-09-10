import Sidebar from "../components/Sidebar";
import styles from "./AppLayout.module.css";
import Map from "../components/Map";
import User from "../components/User";
import Logo from "../components/Logo";
function AppLayout() {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <Logo />
        <User />
      </header>
      <Map />
    </div>
  );
}

export default AppLayout;
