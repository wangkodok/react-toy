import { useState } from "react";
import Title3 from "../components/Title3";

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
      <Title3>토글 버튼</Title3>
      <ul>{Item}</ul>
      <button className="bg-green-500 text-white p-2" onClick={handleClick}>
        버튼
      </button>
    </section>
  );
}
