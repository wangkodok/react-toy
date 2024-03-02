import { useReducer } from "react";

function reducer(state, action) {
  if (action.type === "reducer") {
    console.log(action);
    return {
      count: state.count + 1,
    };
  }

  return state;
}

export default function UseReducer() {
  const useRdc = {
    count: 1,
  };

  const [state, dispatch] = useReducer(reducer, useRdc);

  function handleClick(name) {
    dispatch({ type: "reducer", id: name });
    console.log(state);
  }

  return (
    <section>
      <h1># useReducer 연습 </h1>
      <button
        onClick={() => {
          return handleClick("useReducer");
        }}
      >
        버튼
      </button>
    </section>
  );
}
