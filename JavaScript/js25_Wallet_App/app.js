//^ Selectors

const ekleBtn = document.getElementById("ekle-btn");
const gelirInput = document.getElementById("gelir-input");
const ekleFormu = document.getElementById("ekle-formu");
const temizleBtn = document.getElementById("temizle-btn");

//^ Hesap Tablosu
const gelirinizTd = document.getElementById("geliriniz");
const giderinizTd = document.getElementById("gideriniz");
const kalanTd = document.getElementById("kalan");

//^ variables
let gelirler = 0;
let harcamaListesi = [];

//^ Harcama Formu
const harcamaFormu = document.getElementById("harcama-formu");
const harcamaAlaniInput = document.getElementById("harcama-alani");
const tarihInput = document.getElementById("tarih");
const harcamaInput = document.getElementById("miktar");

//^ Harcama  Tablosu

const harcamaBody = document.getElementById("harcama-body");

//? Ekle Formu Gelirleri almamızı sağlar

ekleFormu.addEventListener("submit", (e) => {
  e.preventDefault(); //reload u önler
  gelirler = gelirler + Number(gelirInput.value);
  // console.log(gelirler)
  // gelirInput.value = ''
  ekleFormu.reset(); // Input alanlarını resetler
  localStorage.setItem("gelirler", gelirler); //local storage e kaydeder
  gelirinizTd.textContent = new Intl.NumberFormat().format(gelirler); //Dom a yazar
  hesapla();
});

//^ sayfa ilk açıldığında varsa localstorage verilerini almak ve ekrana yazdırmak için.
window.addEventListener("load", () => {
  gelirler = Number(localStorage.getItem("gelirler")) || 0;
  tarihInput.valueAsDate = new Date();
  harcamaListesi = JSON.parse(localStorage.getItem("harcamalar")) || [];
  harcamaListesi.forEach((harcama) => harcamaYaz(harcama));
  hesapla();
});

//^ Harcamların girilmesi
harcamaFormu.addEventListener("submit", (e) => {
  e.preventDefault(); //reload u önler
  const yeniHarcama = {
    //Girilen değerlerle bir harcama objesi oluşturuyoruz
    id: new Date().getTime(), //! sistem saatini milisaniye olarak verir
    tarih: new Date(tarihInput.value).toLocaleDateString(), //Tarihi 14.06.2024 şeklinde yazmak için
    miktar: harcamaInput.value,
    alan: harcamaAlaniInput.value,
  };

  harcamaListesi.push(yeniHarcama); //her yeni harcamayı Listeye ekliyoruz
  // console.log(harcamaListesi)
  harcamaFormu.reset(); //Formdaki alanları siliyoruz
  tarihInput.valueAsDate = new Date(); // Sayfa açıldığında günün tarihini HTML e yazar
  localStorage.setItem("harcamalar", JSON.stringify(harcamaListesi)); // Harcama listesini local storage ekliyoruz
  harcamaYaz(yeniHarcama);
  hesapla();
});

//^ Harcamayı dom'a yaz
const harcamaYaz = ({ id, tarih, miktar, alan }) => {
  // const {id, tarih, miktar,alan} = yeniHarcama //data destruction
  // harcamaBody.innerHTML += `
  //         <tr>
  //         <td>${tarih}</td>
  //         <td>${alan}</td>
  //         <td>${miktar}</td>
  //         <td><i id=${id} class="fa-solid fa-trash-can text-danger"  type="button"></i></td>
  //       </tr>

  // `

  const tr = document.createElement("tr"); //tr elementi oluşturur

  //tr nin içindeki td elemenlerini oluşturur
  const appendTd = (content) => {
    const td = document.createElement("td");
    td.textContent = content;
    return td;
  };
  //Çöp kutusunun içeriğini oluşturur
  const createLastTd = () => {
    const td = document.createElement("td");
    const i = document.createElement("i");
    i.id = id;
    i.className = "fa-solid fa-trash-can text-danger";
    i.type = "button";
    td.appendChild(i);
    return td;
  };
  // oluşturulan 4 td yi tr ye ekler
  tr.append(appendTd(tarih), appendTd(alan), appendTd(miktar), createLastTd());

  // harcamaBody.append(tr) //sona ekler
  harcamaBody.prepend(tr); // üste ekler
};

//^ Dom daki gelir gider hesaplarını yapar ve sonuçları yazdırır
const hesapla = () => {
  const giderler = harcamaListesi.reduce(
    (toplam, harcama) => toplam + Number(harcama.miktar),
    0
  );

  // console.log(giderler)
  giderinizTd.textContent = new Intl.NumberFormat().format(giderler); //1000 ayıraçları ve desimal işareti için kullanıcının bölgesel ayarlarını kullanmak için
  gelirinizTd.textContent = new Intl.NumberFormat().format(gelirler);
  kalanTd.textContent = new Intl.NumberFormat().format(gelirler - giderler);

  const borclu = gelirler - giderler < 0;
  // console.log(borclu)

  kalanTd.classList.toggle("text-danger", borclu);
  document.getElementById("kalanTh").classList.toggle("text-danger", borclu);
};

//^ Çöp butonuna tıklanınca ilgili satırı siler ve diğer gerekli işlmeleri yapar.
harcamaBody.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-trash-can")) {
    // console.log('clicked')

    e.target.parentElement.parentElement.remove(); //Dom dan ilgili satırı siler

    const id = e.target.id; //satırın id sini aldık

    // ilgili satırı harcama listesinden kaldırdık
    harcamaListesi = harcamaListesi.filter((harcama) => harcama.id != id);

    //yeni oluşan harcamaListesini localStorage  e güncellemek
    localStorage.setItem("harcamalar", JSON.stringify(harcamaListesi));

    //Silinme işleminden sonra hesap kısmını güncelle
    hesapla();
  }
});

//^ Bilgileri temizle butonu fonksiyonu

temizleBtn.addEventListener("click", () => {
  if (confirm("Tüm Bilgileri Silmek İstediğinize emin misiniz?")) {
    harcamaListesi = []; // Harcama listesini boşaltır
    gelirler = 0; // gelirler değişkenini sıfırlar
    harcamaBody.innerHTML = ""; //Dom'daki veriyi siler
    // localStorage.clear() //! LocalStorage deki her şeyi siler
    localStorage.removeItem("gelirler"); // Local storage den gelirleri siler
    localStorage.removeItem("harcamalar"); // localStorage den harcamaları siler
    hesapla(); // herşey silindikten sonra Dom'daki hesaplamayı yapmak için
  }
});
