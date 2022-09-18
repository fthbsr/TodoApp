import React from "react";
import { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import { useFormik } from "formik";
import validation from "../Component/Validations/validation";
import styles from "../styles/login.module.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const [searchUser] = useContext(UserContext);

  const navigate = useNavigate();

  const { handleChange, handleSubmit, values, errors, handleBlur, touched } =
    useFormik({
      initialValues: {
        userName: "",
        password: "",
      },
      onSubmit: (values) => {
        searchUser(values.userName, values.password);
        navigate("/control");
      },
      validationSchema: validation,
    });

  return (
    <div className={styles.loginForm}>
      <h1 className={styles.title}>Login</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
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
          <div className={styles.errors}>{errors.userName}</div>
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
          <div className={styles.errors}>{errors.password}</div>
        )}

        <div className={styles.button}>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
