import { useState } from "react";

export default function AccordionMenu() {
  const [selectClick, setSelectClick] = useState("start");

  function handleSelect(onSelect) {
    setSelectClick(onSelect);
  }

  return (
    <>
      <h1>아코디언 메뉴</h1>
      <ul>
        <Item
          onSelect={() => {
            return handleSelect("JavaScript");
          }}
        >
          JavaScript
        </Item>
        <Item
          onSelect={() => {
            return handleSelect("React");
          }}
        >
          React
        </Item>
      </ul>
      <p>{selectClick}</p>
    </>
  );
}

function Item({ children, onSelect }) {
  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}
