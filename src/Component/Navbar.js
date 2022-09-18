import React from "react";
import { useContext } from "react";
import styles from "../styles/navbar.module.css";
import { NavLink } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

function Navbar() {
  const [searhUser, user, setUser] = useContext(UserContext);

  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Todo App</h1>
      {!user && (
        <div className={styles.PageLogin}>
          <div className={styles.btn}>
            <NavLink style={{ textDecoration: "none" }} to="/login">
              Login
            </NavLink>
          </div>

          <div className={styles.btn}>
            <NavLink style={{ textDecoration: "none" }} to="/sigin">
              Sigin
            </NavLink>
          </div>
        </div>
      )}
      {user && (
        <div className={styles.userInfo}>
          <p className={styles.user}>{user.userName}</p>
          <div className={styles.logout}>
            <NavLink
              onClick={() => {
                setUser(null);
                localStorage.removeItem("user");
              }}
              to="/"
            >
              Logout
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
