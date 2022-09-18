import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Pages/Main";
import Login from "./Pages/Login";
import Navbar from "./Component/Navbar";
import SigIn from "./Pages/SigIn";
import Error from "./Pages/Error";
import Control from "./Component/Control";
import Profile from "./Pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="login" element={<Login />} />
        <Route path="sigin" element={<SigIn />} />
        <Route path="control" element={<Control />} />
        <Route path="error" element={<Error />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
