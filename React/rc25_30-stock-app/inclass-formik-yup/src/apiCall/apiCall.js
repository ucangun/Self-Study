import axios from "axios";
import { useDispatch } from "react-redux";
import { fetchFail, fetchStart } from "../features/authSlice";

export const register = async (userInfo) => {
  const dispatch = useDispatch(fetchStart());
  try {
    const { data } = await axios.post(
      "https://19104.fullstack.clarusway.com/users",
      userInfo
    );
    console.log(data);
  } catch (error) {
    dispatch(fetchFail());
  }
};

//! Best practice olarak api ile ilgili olan fonksiyonlar bir yerde toplanır. Her hangi bir react hookslarına ihtiyacımız yoksa bu şekilde bir js dosyasında fonksiyonlarımız toplayabiliriz.
//* React Hooks ları sadece ve sadece functional componentlerde kullanılabilir.
//! Bu projede bizim hookslara ihtiyacımız olduğu için fonksiyonlarımızı reactın da önerisiyle custom hooklarda toplayacağız.
//? https://react.dev/learn/reusing-logic-with-custom-hooks

//+ register fonksiyonunu neden custom hooklara ihtiyaç duyuyoruz onu görmek için oluşturduk.

//& ayrıca bu sctructure yapısı da karşımıza çıkabilir. Onu da görmek için oluşturduk.
