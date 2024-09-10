import styles from "./AppLayout.module.css";
import Map from "../components/Map";
import User from "../components/User";
import Logo from "../components/Logo";
import { useState } from "react";
function AppLayout() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  return (
    <div className={styles.app}>
      <header
        style={isFullscreen ? { display: "none" } : {}}
        className={styles.header}
      >
        <Logo />
        <User />
      </header>
      <Map isFullscreen={isFullscreen} setIsFullscreen={setIsFullscreen} />
    </div>
  );
}

export default AppLayout;
