import { useState } from "react";

export default function SetTimeOut() {
  const [time, setTime] = useState(false);

  const timeClear = setTimeout(() => {
    if (time === false) {
      setTime(() => {
        return true;
      });
    } else {
      setTime(() => {
        return false;
      });
    }
  }, 2000);

  if (time === true) {
    clearTimeout(timeClear);
  }

  return (
    <section>
      <h1># 셋타임아웃</h1>
      {time ? <p>true</p> : <p>false</p>}
    </section>
  );
}
