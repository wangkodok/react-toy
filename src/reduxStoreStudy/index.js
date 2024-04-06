import { createStore } from "redux";

const initialState = { name: "", phone: "", array: [] };

function counterReducer(state = initialState, action) {
  if (action.type === "name") {
    return {
      ...state,
      name: action.payload.target.value,
    };
  }

  if (action.type === "phone") {
    return {
      ...state,
      phone: action.payload.target.value,
    };
  }

  if (action.type === "form") {
    action.event.preventDefault();
    return {
      ...state,
      array: [...state.array, action.payload],
    };
  }

  return state;
}

const store = createStore(counterReducer);

export default store;
