import { useState } from "react";

export default function StateList() {
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState({
    text: [],
  });

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  function handleClick() {
    if (inputValue.trim() === "") {
      return;
    }

    setList((item) => {
      return {
        ...item,
        text: [...item.text, inputValue],
      };
    });
    setInputValue("");
  }

  console.log(list);

  return (
    <section>
      <h1># 상태 관리: 객체를 사용하여 상태 관리</h1>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button onClick={handleClick}>클릭</button>
      <ul>
        {list.text.map((stateItem, key) => {
          return (
            <li key={key}>
              <span>{stateItem}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
