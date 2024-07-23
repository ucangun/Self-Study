import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Teacher = () => {
  const navigate = useNavigate();

  const [people, setPeople] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setPeople(res.data));
  }, []);

  return (
    <div className="container text-center mt-4">
      <div className="row">
        {people.map(({ id, name, username, phone }) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={id}>
            {/* https://www.dicebear.com/styles/avataaars/ */}

            <img
              src={`https://api.dicebear.com/9.x/avataaars/svg?seed=${name}`}
              alt=""
              onClick={() => navigate(`/teacher/${id}`)}
            />

            <h5>{name}</h5>
            <h6>{username} </h6>
            <h4>{phone} </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teacher;
