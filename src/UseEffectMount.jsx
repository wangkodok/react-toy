import { useEffect, useState } from "react";

export default function UseEffectMount() {
  const [count, setCount] = useState("");

  console.log(setCount);

  useEffect(() => {
    function handleClick(result) {
      console.log(result);
      setCount(result);
    }

    handleClick("의존성");
  }, []);

  return (
    <section>
      <h1># useEffect 마운트 연습</h1>
      <p>{count}</p>
      <ul>
        <li>케이크를 만들기 위해서는 밀가루, 설탕, 계란이 필요하다. </li>
        <li>케이크가 밀가루, 설탕, 계란에 의존한다. </li>
        <li>결론: 케이크의 의존성은 밀가루, 설탕, 계란 이다.</li>
      </ul>
    </section>
  );
}
