//? Secim Selextors

let yourCoiceDiv = document.getElementById("your-choice");
const pcCoiceDiv = document.getElementById("pc-choice");

//? message

const messagePar = document.querySelector(".message");

//? Colors

const YELLOW = "#FFC538";
const RED = "#FB778B";
const GREEN = "#5AB7AC";

//? Variables

const userSelectImg = document.createElement("img");
const pcSelectImg = document.createElement("img");
let userSelection; // Kullanicinin secimi
let pcRandom; // Pc nin rastgele ürettigi
let pcArr = [];

//? Score
const scoreCardSection = document.querySelector(".score-card");
const pcScoreSpan = document.getElementById("pc-score");
const yourScoreSpan = document.getElementById("your-score");
const topScoreSpan = document.getElementById("top-score");

//? Modal
const modalCardSection = document.querySelector(".modal-card");
const finalMessage = document.querySelector("#final-message");
const playAgainButton = document.querySelector("#play-again");
const modal = document.querySelector(".modal");

//! Selection
const selectionArticle = document.querySelector(".selection");

selectionArticle.addEventListener("click", (event) => {
  userSelection = event.target.id;

  if (userSelection) {
    userSelectImg.src = `./assets/${userSelection}.png`;
    userSelectImg.id = "you";
    yourCoiceDiv.appendChild(userSelectImg);
  }

  createPCSelection();
});

const createPCSelection = () => {
  pcArr = ["rock", "paper", "scissor"];
  // pcRandom = Math.floor(Math.random() * 3);
  pcRandom = pcArr[Math.trunc(Math.random() * 3)];
  //console.log(pcRandom);

  pcSelectImg.src = `./assets/${pcRandom}.png`;
  pcSelectImg.id = "pcs";
  pcCoiceDiv.appendChild(pcSelectImg);

  calculateResult();
};

const calculateResult = () => {
  //console.log(userSelection, pcRandom);

  if (userSelection === pcRandom) {
    draw();
  } else {
    if (userSelection === "rock") {
      pcRandom === "paper" ? youLost(userSelection) : youWin(pcRandom);
    } else if (userSelection === "scissor") {
      pcRandom === "rock" ? youLost(userSelection) : youWin(pcRandom);
    } else if (userSelection === "paper") {
      pcRandom === "scissor" ? youLost(userSelection) : youWin(pcRandom);
    }
  }

  if (pcScoreSpan.textContent === "10" || yourScoreSpan.textContent === "10") {
    openModal();
  }
};

const draw = () => {
  messagePar.textContent = "It's a DRAW!";
  messagePar.style.backgroundColor = "YELLOW";
  scoreCardSection.style.color = "YELLOW";
};

const youLost = (userSelection) => {
  messagePar.textContent = "You Lost!";
  messagePar.style.backgroundColor = "RED";
  scoreCardSection.style.color = "RED";
  pcScoreSpan.textContent++;
  document
    .getElementById("you")
    .setAttribute("src", `./assets/${userSelection}l.png`);
};

const youWin = (pcRandom) => {
  messagePar.textContent = "You Win!";
  messagePar.style.backgroundColor = "GREEN";
  scoreCardSection.style.color = "GREEN";
  yourScoreSpan.textContent++;
  document
    .getElementById("pcs")
    .setAttribute("src", `./assets/${pcRandom}l.png`);
};

const openModal = () => {
  modalCardSection.classList.add("show");

  if (yourScoreSpan.textContent === "10") {
    finalMessage.textContent = "You Win 🎉";
    modal.style.backgroundColor = "GREEN";
    playAgainButton.style.color = "GREEN";
  } else {
    finalMessage.textContent = "You Lost 😞";
    modal.style.backgroundColor = "RED";
    playAgainButton.style.color = "RED";
  }
};

playAgainButton.addEventListener("click", () => {
  window.location.reload();
});
