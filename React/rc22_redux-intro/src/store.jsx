import { combineReducers, legacy_createStore as createStore } from "redux";
import counterReducer from "./redux/reducers/counterReducer";
import todoReducer from "./redux/reducers/todoReducer";

const topluReducer = combineReducers({
  counter: counterReducer,
  todo: todoReducer,
});

export const store = createStore(topluReducer);
