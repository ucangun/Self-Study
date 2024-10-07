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

  //! delete
  const deleteBilgi = async (id) => {
    await axios.delete(`${url}${id}/`);
    getBilgiler();
  };

  //! post veri gönderme

  const postBilgi = async (yeniVeri) => {
    await axios.post(url, yeniVeri);
    getBilgiler();
  };

  //! put update islemi

  const putBilgiler = async (editItem) => {
    await axios.put(`${url}${editItem.id}/`, editItem);
    getBilgiler();
  };

  return (
    <div>
      <AddBilgi postBilgi={postBilgi} />
      <BilgiList
        tutorials={tutorials}
        deleteBilgi={deleteBilgi}
        putBilgiler={putBilgiler}
      />
    </div>
  );
};

export default Home;
