//! Constant
const FREE_SHIPPING_LIMIT = 3000;
const SHIPPING_PRICE = 25.99;
const TAX_RATE = 0.18;

//? Selectors
const deleteAllBtn = document.querySelector(".delete-div .fa-trash-can");
const products = document.querySelector("article.products");

//? Event Listeners

deleteAllBtn.addEventListener("click", () => {
  if (confirm("Are you sure?")) {
    products.textContent = "No Product";
    products.classList.add("no-product"); // Elemente class ekler
    document.querySelector(".delete-div").remove();
    totalPrice();
  }
});

products.addEventListener("click", (event) => {
  /*
  if (event.target.classList.contains("fa-trash-can")) {
    alert("Are you sure ?");
    */

  /*
  if (event.target.classList.contains("fa-plus")) {
    const divButtons = event.target.closest(".buttons-div");
    const quantity = divButtons.querySelector("#quantity");
    let quantityText = quantity.textContent;
    quantityText++;

    quantity.textContent = quantityText;
  }
    */

  if (event.target.classList.contains("fa-plus")) {
    event.target.previousElementSibling.textContent++;
    calculatePrice(event.target);
  } else if (event.target.classList.contains("fa-minus")) {
    if (event.target.nextElementSibling.textContent > 1)
      event.target.nextElementSibling.textContent--;
    calculatePrice(event.target);
  } else if (event.target.classList.contains("fa-trash-can")) {
    const product = event.target.closest(".product");
    product.remove();
    totalPrice();
  }

  ///*************/
});

const calculatePrice = (btn) => {
  const discountedPrice = btn
    .closest(".product-info")
    .querySelector("#discounted-price");
  const productPrice = btn
    .closest(".buttons-div")
    .querySelector("#product-price");
  const quantity = btn.parentNode.querySelector("#quantity");

  productPrice.textContent = (
    quantity.textContent * discountedPrice.textContent
  ).toFixed(2);

  totalPrice();
};

const totalPrice = () => {
  const prices = document.querySelectorAll("#product-price");
  //prices.forEach((price) => console.log(price.textContent));
  const total = [...prices].reduce(
    (sum, price) => sum + Number(price.textContent),
    0
  );
  const shippingPrice =
    total >= FREE_SHIPPING_LIMIT || total === 0 ? 0 : SHIPPING_PRICE;

  const interimPrice = total + shippingPrice;
  const tax = interimPrice * TAX_RATE;

  const sum = total + tax + shippingPrice;

  //! Dom'a sonuclari yazdir
  const selectedPrice = (document.querySelector("#selected-price").textContent =
    total.toFixed(2));
  document.getElementById("shipping").textContent = shippingPrice.toFixed(2);
  document.getElementById("tax").textContent = tax.toFixed(2);
  document.getElementById("total").textContent = sum.toFixed(2);
};

window.addEventListener("load", () => {
  totalPrice();
});
