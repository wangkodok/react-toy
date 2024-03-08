import { useState, useCallback } from "react";
import UseCallbackChildComponent from "./UseCallbackChildComponent";

export default function UseCallbackParentComponent() {
  const [count, setCount] = useState(0);
  const [truthChecker, setTruthChecker] = useState(false);

  const handleClick = useCallback(() => {
    setCount(() => {
      return count + 1;
    });
  }, [count]);

  // useCallback 사용하지 않을 때
  // function handleClick() {
  //   setCount(() => {
  //     return count + 1;
  //   });
  // }
  // function handleClick(num) {
  //   console.log(num);
  //   setCount((prevCount) => {
  //     return prevCount + num;
  //   });
  // }

  function truthCheckerClick() {
    setTruthChecker(() => {
      return !truthChecker;
    });
  }

  return (
    <section>
      <h1># useCallback 사용하여 불필요한 재렌더링 해결</h1>
      <UseCallbackChildComponent handleClick={handleClick} />

      <button
        onClick={() => {
          return handleClick();
        }}
      >
        부모 컴포넌트 버튼
      </button>

      <button
        onClick={() => {
          return truthCheckerClick();
        }}
      >
        전달하지 않는 버튼
      </button>

      <p>{count}</p>
    </section>
  );
}
