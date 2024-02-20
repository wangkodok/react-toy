import { useState, useRef } from "react";

export default function UseRef() {
  const [isMyName, setIsMyName] = useState(null);
  const myName = useRef();

  function handleClick() {
    setIsMyName(myName.current.value);
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
      <p>{isMyName}</p>
    </section>
  );
}
