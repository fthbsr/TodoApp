import { createContext } from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "./UserContext";

export const ContentContext = createContext({});

export const ContentProvider = ({ children }) => {
  const [_, user] = useContext(UserContext);

  const [todos, setTodos] = useState([]);

  const fetchData = async (user) => {
    const r = await axios.get(
      "https://631e773d58a1c0fe9f52a169.mockapi.io/todos"
    );

    setTodos(r.data.filter((item) => `${item.userId}` === user.id).reverse());
  };

  useEffect(() => {
    fetchData(user);
  }, [user]);

  const completion = async (c) => {
    await axios.put(
      `https://631e773d58a1c0fe9f52a169.mockapi.io/todos/${c.id}`,
      {
        content: c.content,
        isCompleted: !c.isCompleted,
        userId: c.userId,
        id: c.id,
      }
    );

    fetchData(user);
  };

  const removeElement = async (element) => {
    try {
      await axios.delete(
        `https://631e773d58a1c0fe9f52a169.mockapi.io/todos/${element.id}`
      );
      window.location.reload();
    } catch (error) {
      console.log(error.message);
    }
  };

  const addElement = (values) => {
    try {
      axios.post("https://631e773d58a1c0fe9f52a169.mockapi.io/todos", {
        content: values.inputValue,
        isCompleted: false,
        userId: user.id,
      });
      setTimeout(() => {
        fetchData(user);
      }, 7000);
    } catch (error) {
      console.log(error);
    }
  };

  const values = [todos, addElement, completion, removeElement];

  return (
    <ContentContext.Provider value={values}>{children}</ContentContext.Provider>
  );
};
