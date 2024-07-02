//? named export yapilmis degiskenleri import yaparken "as" aliasi ile isim degistirerek import edebiliriz
//? default exportlarda istedigimiz isimle import edebiliriz

import by, {
  topla,
  calismaSaati,
  increase as inc,
  decrease as dec,
  myName,
} from "./myModules.js";

//import ugurla from "./myModules.js";

console.log(topla(3, 5));
console.log(calismaSaati);

console.log(inc(5));
console.log(dec(1));
console.log(myName);
// ugurla()
by();
