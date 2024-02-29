import { useState, useContext } from "react";
import { Context } from "./store/stateContext";

export default function ContextAPI() {
  const [userContext, setUserContext] = useState({
    text: "컨텍스트 API 연습",
    count: 1,
  });

  function onHandleClick() {
    setUserContext({
      ...userContext,
      count: userContext.count + 1,
    });
  }

  const state = {
    user: userContext.text,
    count: userContext.count,
    handleClick: onHandleClick,
  };

  return (
    <Context.Provider value={state}>
      <App />
    </Context.Provider>
  );
}

function App() {
  const state = useContext(Context);
  console.log(state);

  return (
    <section>
      <h1># Context API &#40;컨텍스트 API&#41; 연습</h1>
      <span>{state.user} </span>
      <span>{state.count}번 </span>
      <button onClick={state.handleClick}>버튼</button>
    </section>
  );
}
