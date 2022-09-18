import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { UserProvider } from "./Context/UserContext";
import { ContentProvider } from "./Context/ContentContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserProvider>

  <ContentProvider>
        <App />
  </ContentProvider>
  </UserProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
