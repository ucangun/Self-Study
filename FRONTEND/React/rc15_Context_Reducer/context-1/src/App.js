import React, { createContext } from "react";
import Home from "./components/Home";
import data from "./data";
import { useState } from "react";

//! 1-context alani aciyoruz

export const StudentContext = createContext();

const App = () => {
  const [students, setStudents] = useState(data);

  const changeColor = (id, newRenk) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === id ? { ...student, color: newRenk } : student
      )
    );
  };

  return (
    //! 2 bütün projeye gönderilmek üzere ilk Home sayfasini gönderilecek verilerle sarmalladim.

    <StudentContext.Provider value={{ students, changeColor }}>
      <Home />
    </StudentContext.Provider>
  );
};

export default App;
