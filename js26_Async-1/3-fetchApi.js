//* ===========================================================
//*                3- FETCH API
//*=============================================================

//? Dis kaynaklardan veri getirmek icin kullanilan basit bir arabirimdir.
//? Ag istekleri yapmamiza ve cevaplari yonetebilmemize olanak saglar.
//? Javascript ortaminda en cok kullanilan Asenkron islem orneklerinin basinda gelmektedir.

//? fetch() fonksiyonu veri getirmek istediginiz kaynagin yolunu gosteren zorunlu
//? bir parametre almaktadir ve bu istegin cevabini gosteren bir Promise dondurmektedir.
//?! Bu baglamda syntatic sugar benzetmesi yapilabilir.

//!throw ile hata fırlatırsak kodumuz o satırda durur. kodumuzu durdurmak istemezsek diğer sayfadaki kodları kullanırız

// Informational responses (100 – 199)
// Successful responses (200 – 299)
// Redirection messages (300 – 399)
// Client error responses (400 – 499)
// Server error responses (500 – 599)

//! chain (zincir) yapisi

/*
fetch("https://api.github.com/users")
  .then((res) => res.json())
  .then((data) => console.log(data));
*/

const bringData = () => {
  fetch("https://api.github.com/users")
    .then((res) => {
      if (!res.ok) {
        throw new Error("url de hata var");
      } else {
        return res.json();
      }
    })
    .then((data) => ekranaBastir(data));
};

document.querySelector("button").addEventListener("click", bringData);

const ekranaBastir = (data) => {
  data.forEach((person) => {
    document.querySelector("section").innerHTML += `
    <h1>${person.login}</h1>
    <img width="50%" src =${person.avatar_url}/>
    <h3>${person.node_id}</h3>`;
  });
};
