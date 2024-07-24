import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";

const TeacherDetails = () => {
  //! 1 .YOL

  const { id } = useParams();
  // path ile yollanan id yi useParams hookuyla yakaladik
  const [person, setPerson] = useState({});
  const [error, setError] = useState(false);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => setPerson(res.data))
      .catch((err) => setError(true));
  }, [id]);

  const { name, email, website, phone } = person;

  // error durumlarında alttaki gibi js alanına yazılarak error sayfasına yönlendirme  yapılabilir
  if (error) {
    return <NotFound />;
  }

  return (
    <div className="container text-center mt-4">
      <img
        src={`https://api.dicebear.com/9.x/avataaars/svg?seed=${name}`}
        alt="avatar"
      />
      <h3>{name}</h3>
      <h2>{email}</h2>
      <h5>{website}</h5>
      <h5>{phone}</h5>
    </div>
  );
};

export default TeacherDetails;
