import { useEffect, useState } from "react";

const People = () => {
  const [people, setPeople] = useState([]);
  //! 1.YOL fetch then yapisi

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setPeople(data));
  }, []);

  return (
    <div className="container text-center mt-4">
      <div className="row">
        {people.map(({ id, name, username, phone }) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 " key={id}>
            <img
              src={`https://api.dicebear.com/9.x/avataaars/svg?seed=${name}`}
              alt="avatar"
              width="200px"
            />
            <h5>{name}</h5>
            <h6>{username}</h6>
            <h4>{phone}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default People;
