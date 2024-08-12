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

  const changeWidth = (id, size) => {
    setUsers(
      users.map((user) => (user.id === id ? { ...user, width: size } : user))
    );
  };

  return (
    <KullaniciContext.Provider value={{ users, changeWidth }}>
      {children}
    </KullaniciContext.Provider>
  );
};

export default KullaniciProvider;
