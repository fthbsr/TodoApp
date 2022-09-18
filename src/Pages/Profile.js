import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { ContentContext } from "../Context/ContentContext";
import { UserContext } from "../Context/UserContext";
import { useFormik } from "formik";
import inputValidation from "../Component/Validations/inputValidation";
import styles from "../styles/Profile.module.css";

function Profile() {
  const [todos, addElement, completion, removeElement] =
    useContext(ContentContext);
  const [_, user] = useContext(UserContext);
  const [loading, setLoading] = useState(false);

  const [element, setElement] = useState();

  useEffect(() => {
    setElement(todos);
  }, [todos]);

  const getAll = () => {
    setElement(todos);
  };

  const getCompleted = () => {
    if (todos.filter((item) => item.isCompleted === true)) {
      setElement(todos.filter((item) => item.isCompleted === true));
    }
  };

  const getUnCompleted = () => {
    setElement(todos.filter((item) => item.isCompleted === false));
  };

  const { handleChange, handleSubmit, values, errors, handleBlur, touched } =
    useFormik({
      initialValues: {
        inputValue: "",
      },
      onSubmit: (values) => {
        setLoading(true);
        addElement(values);
        setTimeout(() => {
          setLoading(false);
        }, 7000);
        values.inputValue = "";
      },
      validationSchema: inputValidation,
    });

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          {user.userName.toUpperCase()}'s Todo List{" "}
        </h1>
        <div>
          <form
            className={styles.form}
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <input
              type="text"
              value={values.inputValue}
              name="inputValue"
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <button type="submit">Add</button>
          </form>
          {errors.inputValue && touched.inputValue && (
            <div className={styles.error}>{errors.inputValue}</div>
          )}
        </div>

        <div>
          {loading && <p className={styles.loading}>Yukleniyor ...</p>}
          {element &&
            element.map((x, i) => {
              return (
                <div className={styles.list}>
                  <p
                    className={x.isCompleted === true ? styles.content : ""}
                    onClick={() => {
                      completion(x);
                    }}
                    key={i}
                  >
                    {x.content}
                  </p>
                  <button
                    className={styles.button}
                    onClick={() => {
                      removeElement(x);
                    }}
                  >
                    X
                  </button>
                </div>
              );
            })}
        </div>
        <div className={styles.select}>
          <button onClick={getAll}>All</button>
          <button onClick={getCompleted}>Completed</button>
          <button onClick={getUnCompleted}>UnCompleted</button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
