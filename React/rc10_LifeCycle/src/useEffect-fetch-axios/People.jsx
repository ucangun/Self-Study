import { useEffect, useState } from "react";
import axios from "axios";

const People = () => {
  const [people, setPeople] = useState([]);
  //! 1.YOL fetch then yapisi
  /*
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setPeople(data));
  }, []);
*/
  //! 2.YOL async await
  /*
  const getir = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    setPeople(data);
  };

  useEffect(() => {
    getir();
  }, []);
*/
  //! 3.YOL async await axios

  const getir = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setPeople(data);
  };

  useEffect(() => {
    getir();
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
            <h6>{phone}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default People;
