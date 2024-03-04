import { useState, useEffect } from "react";

export default function UseEffectDependencyArray() {
  const [count, setCount] = useState(0);
  const [result, setResult] = useState("");

  useEffect(() => {
    setResult(() => {
      return count;
    });
  }, [count]);

  function handleClick() {
    setCount((prevCount) => {
      return prevCount + 1;
    });
  }

  return (
    <section>
      <h1># useEffect 의존성 배열 연습</h1>
      <p>클릭된 횟수: {result}</p>
      <button onClick={handleClick}>버튼</button>
    </section>
  );
}
