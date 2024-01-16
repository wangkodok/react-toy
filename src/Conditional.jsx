import { useState } from "react";

export default function AccordionMenu() {
  const [selectClick, setSelectClick] = useState();

  function handleSelect(onSelect) {
    setSelectClick(onSelect);
  }

  let innerHTML = <p>아코디언 메뉴 클릭하기</p>;

  if (selectClick) {
    innerHTML = <p>{selectClick}</p>;
  }

  return (
    <>
      <h1>아코디언 메뉴에서 조건문</h1>
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
      {/* {selectClick === undefined ? <p>아코디언 메뉴 클릭하기</p> : <p>{selectClick}</p>} */}

      {/* {!selectClick ? <p>아코디언 메뉴 클릭하기</p> : <p>{selectClick}</p>} */}

      {/* {!selectClick && <p>아코디언 메뉴 클릭하기</p>} */}
      {/* {selectClick && <p>{selectClick}</p>} */}

      {innerHTML}
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
