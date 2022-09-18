import React, { useContext } from "react";
import { useFormik } from "formik";
import styles from "../styles/Sigin.module.css";
import { UserContext } from "../Context/UserContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import siginValidation from "../Component/Validations/validation";

function SigIn() {
  const [searchUser, user, setUser, siginUser] = useContext(UserContext);

  const [siginLoad, setSiginLoad] = useState(false);

  const navigate = useNavigate();

  const { handleChange, handleSubmit, values, errors, handleBlur, touched } =
    useFormik({
      initialValues: {
        userName: "",
        password: "",
        confirmPassword: "",
      },
      onSubmit: (values) => {
        siginUser(values);
      },
      validationSchema: siginValidation,
    });

  return (
    <div className={styles.sigin}>
      <h1 className={styles.title}> Sign In </h1>

      <form
        className={styles.loginForm}
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
          setSiginLoad(true);

          setTimeout(() => {
            setSiginLoad(false);
            navigate("/login");
          }, 3000);
        }}
      >
        <label>UserName</label>
        <input
          type="text"
          name="userName"
          value={values.userName}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.userName && touched.userName && (
          <div className={styles.error}>{errors.userName}</div>
        )}

        <br />
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        {errors.password && touched.password && (
          <div className={styles.error}>{errors.password}</div>
        )}
        <br />
        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        {errors.password && touched.password && (
          <div className={styles.error}>{errors.password}</div>
        )}

        <br />
        <div className={styles.button}>
          <button type="submit">Sig In</button>
        </div>
        {siginLoad && (
          <p className={styles.siginLoad}>Kaydiniz Olusturuluyor ...</p>
        )}
      </form>
    </div>
  );
}

export default SigIn;
