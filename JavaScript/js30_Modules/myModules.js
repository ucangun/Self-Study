//*************************************/
//* ES-MODULES
//*************************************/
//? ES Modules, EcmaScript 2015 versiyonu ile gelmiştir.
//? Günümüzde birçok browser ES modül yapısını desteklemektedir.
//? JS kodlarının kolay ve performansli bir şekilde farklı dosyalara ayrilmasina ve gerektiginde birleştirmesine olanak saglamaktadir.
//? Bir degisken,dizi,obje, fonksiyon, class v.b "export" deyimi ile başka dosyalarinin kullanimina açilmabilir.
//? Kullanima acilanlar ise import deyimi ile istenilen dosyaya eklenebilir.

//* named export
export const calismaSaati = 40;

export function topla(s1, s2) {
  return s1 + s2;
}

let counter = 5;

const increase = (miktar) => (counter += miktar);

const decrease = (miktar) => (counter -= miktar);

const myName = "Felix";

export { increase, decrease, myName };

//* default export
//? bir sayfada 1 tane default export olabilir
//? tüm yapi tek seferde export edilir
//? import ederken istedigimiz isimle import edip kullanabiliriz

// function ugurla() {
//   console.log("görüsürüz JS");
// }

// export default ugurla;

export default function ugurla() {
  console.log("görüsürüz JS");
}
