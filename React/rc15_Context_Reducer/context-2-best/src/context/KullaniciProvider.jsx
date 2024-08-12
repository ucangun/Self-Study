import React, { createContext, useEffect, useState } from "react";

//! 1-Create Context

export const KullaniciContext = createContext();

const KullaniciProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <KullaniciContext.Provider value={{ users }}>
      {children}
    </KullaniciContext.Provider>
  );
};

export default KullaniciProvider;
