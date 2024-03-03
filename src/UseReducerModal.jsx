import { useReducer } from "react";

function reducer(state, action) {
  if (action.type === "modal") {
    // console.log(state, "상태");
    if (state === false) {
      return true;
    } else {
      return false;
    }
  }

  return state;
}

export default function UseReducerModal() {
  const [state, dispatch] = useReducer(reducer, false);
  // console.log(state);

  function handleClick() {
    dispatch({
      type: "modal",
    });
  }

  let modal = null;
  if (state) {
    modal = <p>실제 이 UI는 Non-modal 입니다.</p>;
  }

  return (
    <section>
      <h1># useReducer 사용하여 모달창 띄우기</h1>
      <button onClick={handleClick}>모달창 버튼</button>
      {modal}
      {/* {state ? <p>모달창 입니다.</p> : null} */}
    </section>
  );
}
