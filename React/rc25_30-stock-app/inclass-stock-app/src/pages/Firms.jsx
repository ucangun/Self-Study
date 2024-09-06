import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchStart } from "../features/authSlice";
import { useEffect } from "react";
import { firmSuccess } from "../features/stockSlice";

const Firms = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((store) => store.auth);

  const getFirms = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await axios(`${import.meta.env.VITE_BASE_URL}firms`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      console.log(data);
      dispatch(firmSuccess(data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFirms();
  }, []);

  return <div>Firms</div>;
};

export default Firms;
