import { Link } from "react-router-dom";
import styles from "./Homepage.module.css";
import PageNav from "../components/PageNav";
export default function Homepage() {
  return (
    <div className={styles.container}>
      <header>
        <PageNav />
      </header>

      <main className={styles.homepage}>
        <section>
          <h1>World Wise</h1>
          <h2>Travel the world.</h2>
          <h3>
            A world map that tracks your footsteps into every city you can think
            of. Never forget your wonderful experiences, and show your friends
            how you have wandered the world.
          </h3>
          <Link to="/login" className="cta">
            Start Tracking now
          </Link>
        </section>
      </main>
    </div>
  );
}
