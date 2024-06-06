//! Secim Selextors

let yourCoiceDiv = document.getElementById("your-choice");
const pcCoiceDiv = document.getElementById("pc-choice");

//! Colors

const YELLOW = "#FFC538";
const RED = "#FB778B";
const GREEN = "#5AB7AC";

//! Variables

const userSelectImg = document.createElement("img");
const pcSelectImg = document.createElement("img");
let userSelection; // Kullanicinin secimi
let pcRandom; // Pc nin rastgele ürettigi
let pcArr = [];

//! Selection
const selectionArticle = document.querySelector(".selection");

selectionArticle.addEventListener("click", (event) => {
  userSelection = event.target.id;

  if (userSelection) {
    userSelectImg.src = `./assets/${userSelection}.png`;
    yourCoiceDiv.appendChild(userSelectImg);
  }

  createPCSelection();
});

const createPCSelection = () => {
  pcArr = ["rock", "paper", "scissor"];
  // pcRandom = Math.floor(Math.random() * 3);
  pcRandom = pcArr[Math.trunc(Math.random() * 3)];
  console.log(pcRandom);

  pcSelectImg.src = `./assets/${pcRandom}.png`;
  pcCoiceDiv.appendChild(pcSelectImg);
};
