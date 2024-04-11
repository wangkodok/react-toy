import { createStore } from "redux";

const initialState = { array: [] };

function counterReducer(state = initialState, action) {
  if (action.type === "add") {
    return {
      ...state,
      array: [...state.array, action.payload],
    };
  }

  if (action.type === "delete") {
    return {
      ...state,
      array: state.array.filter((todo) => todo.id !== action.payload),
    };
  }

  if (action.type === "update") {
    // action.event.preventDefault();
    return {
      ...state,
      array: state.array.map((todo) =>
        todo.id === action.payload.id ? { ...todo, ...action.payload } : todo
      ),
    };
  }

  return state;
}

const store = createStore(counterReducer);

export default store;
