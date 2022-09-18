import React from "react";
import styles from "../styles/error.module.css";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Error() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/login");
    }, 3000);
  }, []);

  return (
    <div className={styles.error}>
      Girmis Oldugunuz Bilgiler Gecersizdir Tekrar Giris Sayfasina
      Yonlendiriliyorsunuz...
    </div>
  );
}

export default Error;
