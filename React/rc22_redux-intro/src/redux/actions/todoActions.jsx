export const ekle = (input) => ({
  type: "EKLE",
  payload: input,
});

export const sil = (id) => ({
  type: "SIL",
  payload: id,
});

export const degistir = (id) => ({
  type: "DEGISTIR",
  payload: id,
});
