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

const Hooks = () => {
  return <div>Hooks</div>;
};

export default Hooks;
