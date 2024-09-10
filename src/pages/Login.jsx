import { useEffect, useState } from "react";
import styles from "./Login.module.css";
import PageNav from "../components/PageNav";
import Button from "../components/Button";
import { useAuth } from "../contexts/FakeAuthContext";
import { useNavigate } from "react-router-dom";
import Message from "../components/Message";

export default function Login() {
  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState("mahmoud@example.com");
  const [password, setPassword] = useState("qwerty");
  const { login, isAuthenicated, error } = useAuth();
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (email && password) {
      login(email, password);
    }
  }
  useEffect(() => {
    if (isAuthenicated) {
      navigate("/app", { replace: true });
    }
  }, [isAuthenicated, navigate]);

  return (
    <div className={styles.container}>
      <PageNav />

      <main className={styles.login}>
        <div className={styles.formContainer}>
          <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
            <div className={styles.row}>
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                id="email"
                required
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>

            <div className={styles.row}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                required
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <div>
              <Button type={"primary"}>Login</Button>
            </div>
            {error && <Message>{error}</Message>}
          </form>
        </div>
      </main>
    </div>
  );
}
