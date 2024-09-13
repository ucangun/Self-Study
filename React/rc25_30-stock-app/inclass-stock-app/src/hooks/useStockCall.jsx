import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchFail,
  // brandSuccess,
  fetchStart,
  getProCatBrandSuccess,
  getProPurcFirBrandsSuccess,
  getProSalBrandsSuccess,
  getPurSalesSuccess,
  // firmSuccess,
  getStockSuccess,
} from "../features/stockSlice";
import axios from "axios";
import useAxios from "./useAxios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";

const useStockCall = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const axiosWithToken = useAxios();

  //   const getFirms = async () => {
  //     dispatch(fetchStart());
  //     try {
  //       const { data } = await axios(`${import.meta.env.VITE_BASE_URL}firms`, {
  //         headers: {
  //           Authorization: `Token ${token}`,
  //         },
  //       });
  //       console.log(data);
  //       dispatch(firmSuccess(data));
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   const getBrands = async () => {
  //     dispatch(fetchStart());
  //     try {
  //       const { data } = await axios(`${import.meta.env.VITE_BASE_URL}brands`, {
  //         headers: {
  //           Authorization: `Token ${token}`,
  //         },
  //       });
  //       console.log(data);
  //       dispatch(brandSuccess(data));
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //* DRY
  //! yukarıdaki gibi her seferinde yazmak yerine daha modüler bir yapı kurarak tek bir fonksiyonla bir den fazla get işlemini gerçekleştirebiliyoruz
  const getStockData = async (endpoint) => {
    dispatch(fetchStart());
    try {
      // const { data } = await axios(
      //   `${import.meta.env.VITE_BASE_URL}${endpoint}`,
      //   {
      //     headers: {
      //       Authorization: `Token ${token}`,
      //     },
      //   }
      // );
      const { data } = await axiosWithToken.get(endpoint);
      console.log(data);
      dispatch(getStockSuccess({ stock: data.data, endpoint })); //* action creatorlar her zaman tek bir parametre kabul ederler
    } catch (error) {
      console.log(error);
    }
  };
  //! istek atarken ortak olan base_url  ve token gibi değerleri her seferinde yazmak yerine axios instance kullanarak bunları orada tanımlıyoruz. Ve sonrasında sadece istek atmak istediğimiz end pointi yazmamız yeterli oluyor.
  //? https://axios-http.com/docs/instance
  const deleteStockData = async (endpoint, id) => {
    dispatch(fetchStart());
    try {
      // await axios.delete(`${import.meta.env.VITE_BASE_URL}${endpoint}/${id}`,
      //   {
      //     headers: {
      //       Authorization: `Token ${token}`,
      //     },
      //   })
      await axiosWithToken.delete(`${endpoint}/${id}`);
      toastSuccessNotify(`${endpoint} is successfully deleted!`);
      // getStockData(endpoint)
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    } finally {
      getStockData(endpoint);
    }
  };

  const postStockData = async (endpoint, info) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.post(endpoint, info);
      toastSuccessNotify(`${endpoint} is successfully recorded!`);
    } catch (error) {
      console.log(error);
      console.log(error.response.data.message);
      toastErrorNotify(error.response.data.message);
      dispatch(fetchFail());
    } finally {
      getStockData(endpoint);
    }
  };

  const putStockData = async (endpoint, info) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.put(
        `${endpoint}/${info._id}`,
        info
      );
      toastSuccessNotify(`${endpoint} is successfully updated!`);
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    } finally {
      getStockData(endpoint);
    }
  };

  //!Promise.all()
  //* eş zamanlı istek atma. aynı anda istek atılıyor aynı anda responselar gelmeye başlıyor. Zaman noktasında da avantajlı. En uzun hangi istek sürdüyse veriler ondan sonra valid olur. Birbirine bağımlı isteklerde en büyük avantajı hata durumu. İsteklerden biri bile hatalı olursa hepsi iptal olur.
  const getProCatBrand = async () => {
    dispatch(fetchStart());
    try {
      // const [a,b] = [1,2] // array descturing
      const [products, categories, brands] = await Promise.all([
        axiosWithToken("products"),
        axiosWithToken("categories"),
        axiosWithToken("brands"),
      ]);
      console.log("products", products);

      dispatch(
        getProCatBrandSuccess([
          products?.data?.data,
          categories?.data?.data,
          brands?.data?.data,
        ])
      );
    } catch (error) {
      dispatch(fetchFail());
    }
  };
  const getProSalBrands = async () => {
    dispatch(fetchStart());
    try {
      // const { data } = await axiosWithToken.get(`stock/${url}/`);
      const [products, brands, sales] = await Promise.all([
        axiosWithToken.get(`products/`),
        axiosWithToken.get(`brands/`),
        axiosWithToken.get(`sales/`),
      ]);

      dispatch(
        getProSalBrandsSuccess([products?.data, brands?.data, sales?.data])
      );
    } catch (error) {
      dispatch(fetchFail());
    }
  };
  const getProPurcFirBrands = async () => {
    dispatch(fetchStart());
    try {
      // const { data } = await axiosWithToken.get(`stock/${url}/`);
      const [products, purchases, firms, brands] = await Promise.all([
        axiosWithToken.get(`products/`),
        axiosWithToken.get(`purchases/`),
        axiosWithToken.get(`firms/`),
        axiosWithToken.get(`brands/`),
      ]);

      dispatch(
        getProPurcFirBrandsSuccess([
          products?.data,
          purchases?.data,
          firms?.data,
          brands?.data,
        ])
      );
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  const getPurSales = async () => {
    dispatch(fetchStart());
    try {
      const [purchases, sales] = await Promise.all([
        axiosWithToken("purchases"),
        axiosWithToken("sales"),
      ]);
      dispatch(getPurSalesSuccess([purchases?.data, sales?.data]));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  return {
    // getFirms,
    // getBrands,
    getStockData,
    deleteStockData,
    postStockData,
    putStockData,
    getProCatBrand,
    getProSalBrands,
    getProPurcFirBrands,
    getPurSales,
  };
};

export default useStockCall;
