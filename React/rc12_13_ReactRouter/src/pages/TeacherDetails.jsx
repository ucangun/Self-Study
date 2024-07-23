import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const TeacherDetails = () => {
  //! 1 .YOL

  const { id } = useParams();
  // path ile yollanan id yi useParams hookuyla yakaladik
  const [person, setPerson] = useState({});
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => setPerson(res.data));
  }, [id]);

  const { name, email } = person;

  return (
    <div>
      <h3>{name}</h3>
      <h2>{email}</h2>
    </div>
  );
};

export default TeacherDetails;
