import React from "react";

const initial = {
  gorevler: [
    { id: 0, yazi: "Redux Çalışıyoruz", completed: false },
    { id: 1, yazi: "köpekleri gezdir", completed: true },
  ],
};

const todoReducer = (state = initial, { type, payload }) => {
  switch (type) {
    case "EKLE":
      break;

    default:
      return state;
  }
};

export default todoReducer;
