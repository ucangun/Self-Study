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
      return {
        gorevler: [
          ...state.gorevler,
          { id: state.gorevler.length, yazi: payload, completed: false },
        ],
      };
    case "SIL":
      return {
        gorevler: state.gorevler.filter((gorev) => gorev.id !== payload),
      };
    case "DEGISTIR":
      return {
        gorevler: state.gorevler.map((gorev) =>
          gorev.id === payload
            ? { ...gorev, completed: !gorev.completed }
            : gorev
        ),
      };

    default:
      return state;
  }
};

export default todoReducer;
