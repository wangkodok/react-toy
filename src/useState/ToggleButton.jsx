import { useState } from "react";

export default function ToggleButton() {
  const [is, setIs] = useState(false);

  function handleClick() {
    setIs(function isFunction() {
      return is === false ? true : false;
    });
  }

  let Item = <li>하나</li>;
  if (is) {
    Item = <li>둘</li>;
  }

  return (
    <section>
      <h3>토글 버튼</h3>
      <ul>{Item}</ul>
      <button onClick={handleClick}>버튼</button>
    </section>
  );
}
