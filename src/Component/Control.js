import React, { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

function Control() {
  const [searchUser, user, setUser] = useContext(UserContext);
  const navigate = useNavigate();

  const [error, setError] = useState(false);

  useEffect(() => {
    if (user) {
      navigate("/profile");
    } else {
      setTimeout(() => {
        setError(true);
      }, 2000);
    }
  }, [user]);

  return (
    <div>
      <h1>Bilgileriniz kontrol ediliyor</h1>
      {error && navigate("/error")}
    </div>
  );
}

export default Control;
