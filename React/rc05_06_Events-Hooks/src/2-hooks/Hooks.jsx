//* ==================== HOOKS ===============================
//! Hook’lar fonksiyonel component’ler icerisinde state’leri kullanmamiza
//! olanak saglayan ozel fonksiyonlardir.
//! React 16.8 versiyonu ile gelmistir ve geldikten sonra Class-componentler’in
//! kullanimini cok azaltmistir.
//? React’ta useState(), useEffect(), useContext() gibi bir cok built-in
//? Hook bulunmaktadir. Ayrica custom hook tanimlamak da mumkundur.
//* Hook Kullanim Kurallari:
//* 1. İlk olarak import edilmeliler. import { useState } from “react”;
//* 2. Hook’lar ust seviyede tanimlanmalidir. Yani Hook’lar bir
//*    dongunun, kosul cumleciginin ve icice fonksiyonlarin icerisinde
//*    kullanilmamalidir.
//* 3. Hook’lar sadece React Fonksiyonel componentleri icerisinde cagrilmalidir.
//*    Normal Javascript fonksiyonlari icerisinde cagrilmamalidir
//*    (Custom hook’lar icerisinde bir hook cagrilabilir)
//?    https://react.dev/reference/react/hooks#state-hooks
//* =============================================================
import { useState } from "react";

const Hooks = () => {
  const [sayac, setSayac] = useState(0);

  const arttir = () => {
    setSayac(sayac + 1);
  };
  return (
    <div>
      <h1>****************************************</h1>
      <h1>USESTATE</h1>
      <h2 className="text-danger">COUNT: {sayac}</h2>
      <button onClick={arttir} className="btn btn-primary">
        ARTTIR
      </button>
    </div>
  );
};

export default Hooks;
