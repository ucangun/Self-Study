//www.themealdb.com/
let dizi = [];

fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
  .then((resp) => resp.json())
  .then((veri) => {
    dizi = veri;
    showScreen(veri.meals);
  });

//!EKRANA BASTIRMA

function showScreen(data) {
  const mealsDiv = document.querySelector(".food");
  mealsDiv.innerHTML = "";

  data.forEach((a) => {
    mealsDiv.innerHTML += `
<div class="col-md-3">
<p>${a.strMeal} </p>
<img width="200px" src="${a.strMealThumb}"/>
</div>

`;
  });
}

//!arama inputuna yazdığım harfleri içeren yemekleri ekrana bastır (oninput=kullanıcı input elemanına her veri girişinde çalışmaktadır)

//? e.target.value=> inputa her veri girişindeki değerleri alabilmek için kullanılır.document.querySelector("input").value=e.target.value

document.querySelector("input").oninput = (e) => {
  //  console.log(e.target.value);
  // document.querySelector("input").value
  // console.log(dizi);

  let veri = dizi.meals.filter((a) =>
    a.strMeal.toLowerCase().includes(e.target.value.toLowerCase())
  );

  showScreen(veri);
};

//!bayraklara tıklanınca o ülkenin yemeği gelsin

document.querySelectorAll("img").forEach(
  (a) =>
    (a.onclick = () => {
      fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${a.id}`)
        .then((res) => res.json())
        .then((data) => showScreen(data.meals));
    })
);
