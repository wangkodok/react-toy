import { useState, useRef } from "react";

export default function UseRef() {
  const [isMyName, setIsMyName] = useState(null);
  const myName = useRef();

  function handleClick() {
    // myName.current 사용하여 요소 가져오기
    setIsMyName(myName.current.value);
    myName.current.value = "";
  }

  return (
    <section>
      <h1># useRef 훅 사용</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label htmlFor="ref">이름</label>
        <input ref={myName} type="text" id="ref" />
        <button onClick={handleClick}>버튼</button>
      </form>
      <p>{isMyName ?? "이름을 작성하십시오."}</p>
    </section>
  );
}
