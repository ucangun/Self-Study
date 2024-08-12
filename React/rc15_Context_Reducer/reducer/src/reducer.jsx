export const state1 = {
  loading: false,
  dog: "",
  error: "",
};
// mesaj=payload dispatch=yakala
export const reducerAA = (state1, action1) => {
  switch (action1.type) {
    case "START":
      return { ...state1, loading: true };
    case "SUCCESS":
      return { ...state1, dog: action1.mesaj, loading: false };
    case "FAIL":
      return { ...state1, error: action1.mesaj, loading: false };
    default:
      return state1;
  }
};
