import { useState, useEffect, useCallback } from "react";

export default function UseCallbackSetTimeout() {
  const [time, setTime] = useState();

  function handleClick() {
    setTimeout(() => {
      console.log("버튼 클릭 작동: callback 렌더링 하지 않는다.");
      setTime(() => {
        return "안녕하세요";
      });
    }, 1000);
  }

  const callback = useCallback(() => {
    console.log("useCallback 렌더링");
    setTime(() => {
      return "버튼 클릭하면 1초 후.. 텍스트 변경";
    });
  }, []);

  useEffect(() => {
    callback();
  }, [callback]);

  return (
    <section>
      <h1># useCallback setTimeout</h1>
      <button onClick={handleClick}>버튼</button>
      <p>{time}</p>
    </section>
  );
}
