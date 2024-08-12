import React, { useContext } from "react";
import { StudentContext } from "../App";

const OgrenciItem = () => {
  //! 3- (context consumer)
  const { students, changeColor } = useContext(StudentContext);

  return (
    <div>
      {students.map((student) => (
        <div key={student.id} style={{ backgroundColor: student.color }}>
          <h3>NAME: {student.name}</h3>
          <h4>EMAIL: {student.email}</h4>
          <h4>AGE: {student.age}</h4>
          Color:
          <input
            type="text"
            value={student.color}
            onChange={(e) => changeColor(student.id, e.target.value)}
          />
        </div>
      ))}
    </div>
  );
};

export default OgrenciItem;
