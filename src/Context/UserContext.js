import axios from "axios";
import { createContext, useState } from "react";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const searchUser = async (name, password) => {
    const { data } = await axios.get(
      `https://631e773d58a1c0fe9f52a169.mockapi.io/Users`
    );
    if (name && password) {
      data.find((p) => {
        if (
          p.userName.toLowerCase() === name.toLowerCase() &&
          p.Password.toLowerCase() === password.toLowerCase()
        ) {
          localStorage.setItem("user", JSON.stringify(p));
          setUser(p);
        }
      });
    }
  };
  const siginUser = async (value) => {
    const d = await axios.post(
      "https://631e773d58a1c0fe9f52a169.mockapi.io/Users",
      {
        userName: value.userName,
        Password: value.password,
      }
    );
  };

  const values = [searchUser, user, setUser, siginUser];

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};
