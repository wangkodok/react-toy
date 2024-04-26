// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function ReduxPageEdit() {
  // const params = useParams();
  const dispatch = useDispatch();
  const selector = useSelector((state) => {
    return state;
  });

  function handleOnChange(e) {
    dispatch({
      type: "edit",
      payload: e.target.value,
    });
  }

  function handleOnClick() {
    dispatch({
      type: "click",
      payload: selector.name,
    });
  }

  console.log(selector);

  return (
    <section>
      <h1>
        # 리덕스 활용하여 프로필 편집하는 페이지로 이동하여 이름 변경하고 목록
        페이지로 이동
      </h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input type="text" onChange={handleOnChange} />
        <button onClick={handleOnClick}>저장</button>
      </form>
      <p>{selector.name}</p>
    </section>
  );
}
