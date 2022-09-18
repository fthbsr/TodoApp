import React, { useContext } from "react";
import { useEffect } from "react";
import { UserContext } from "../Context/UserContext";
import { useNavigate } from "react-router";
import styles from "../styles/main.module.css";

function Main() {
  const [searchUser, user, setUser] = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/profile");
    }
  }, [user]);

  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Todo App'e Hosgeldiniz </h1>
      <p className={styles.p}>
        Yapilicaklarinizi listesini tutucak bir uygulamami ariyorsunuz?
      </p>
      <p className={styles.p}>
        Todo App tam size gore kayit olarak veya giris yaparak hemen
        kullanabilirsiniz.
      </p>

      <div className={styles.section}>
        <div className={styles.member}>
          <h1>Zaten Uyeyim</h1>
          <button
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </button>
        </div>
        <div className={styles.sigin}>
          <h1>Kayit Ol</h1>
          <button
            onClick={() => {
              navigate("/sigin");
            }}
          >
            SigIn
          </button>
        </div>
      </div>
    </div>
  );
}

export default Main;
