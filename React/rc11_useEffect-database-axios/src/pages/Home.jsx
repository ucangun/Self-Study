import axios from "axios";
import { useEffect, useState } from "react";
import BilgiList from "../components/BilgiList";
import AddBilgi from "../components/AddBilgi";

const Home = () => {
  const [tutorials, setTutorials] = useState([]);

  const url = "https://tutorial-api.fullstack.clarusway.com/tutorials/";

  //! GET - READ

  const getBilgiler = async () => {
    const res = await axios.get(url);
    setTutorials(res.data);
  };

  useEffect(() => {
    getBilgiler();
  }, []);

  const deleteBilgi = async (id) => {
    await axios.delete(`${url}${id}/`);
    getBilgiler();
  };

  return (
    <div>
      <AddBilgi />
      <BilgiList tutorials={tutorials} deleteBilgi={deleteBilgi} />
    </div>
  );
};

export default Home;
