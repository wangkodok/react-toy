import { createStore } from "redux";

const initialState = { name: "", desc: "" };

function counterReducer(state = initialState, action) {
  if (action.type === "edit") {
    return {
      name: action.payload,
    };
  }

  if (action.type === "click") {
    return {
      desc: action.payload,
    };
  }

  return state;
}

const store = createStore(counterReducer);

export default store;
