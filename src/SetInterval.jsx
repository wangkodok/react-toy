import { useState } from "react";

export default function SetInterval() {
  const [count, setCount] = useState(0);

  setInterval(() => {
    setCount(count + 1);
  }, 1000);

  console.log(count);

  // setTimeout(() => {
  //   setCount((item) => {
  //     return item + 1;
  //   });
  // }, 1000);

  // console.log(count);

  return (
    <section>
      <h1># 셋인터벌</h1>
      <p>{count}</p>
    </section>
  );
}
