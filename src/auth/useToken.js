import { useState } from "react";

export const useToken = () => {
  const [token, setSessionToken] = useState(() => {
    if (sessionStorage.getItem("token")) {
      return sessionStorage.getItem("token");
    } else {
      return null;
    }
  });

  const setToken = (id) => {
    sessionStorage.setItem("token", id);
    setSessionToken(id);
  };

  return [token, setToken];
};
