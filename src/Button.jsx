import { useState } from "react";

export default function Button() {
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
    <>
      <ul>{Item}</ul>
      <button onClick={handleClick}>버튼</button>
    </>
  );
}
