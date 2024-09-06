import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchFail, fetchStart } from "../features/authSlice";
import { firmSuccess } from "../features/stockSlice";

const useStockCall = () => {
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
      dispatch(fetchFail());
    }
  };

  const getBrands = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await axios(`${import.meta.env.VITE_BASE_URL}brands`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      console.log(data);
      dispatch(brandSuccess(data));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  return { getFirms, getBrands };
};

export default useStockCall;
