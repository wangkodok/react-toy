import { useState } from "react";

const DATA = [
  {
    title: "JavaScript",
    desc: "자바스크립트",
  },
  {
    title: "React",
    desc: "리액트",
  },
];

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
      <h1>아코디언 메뉴에서 태그를 동적으로 처리</h1>
      <List id="PROPS" className="props" title="목록" tag="ul">
        {DATA.map((data) => {
          return <Contents key={data.title} {...data} />;
        })}
      </List>
      <List tag="ul">
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
      </List>
      {innerHTML}
    </>
  );
}

function List({ title, children, tag, ...props }) {
  const Tag = tag;

  return (
    <>
      <Tag {...props}>{children}</Tag>
      <p>{title}</p>
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

function Contents({ title, desc }) {
  return (
    <li>
      <p>
        {title} {desc}
      </p>
    </li>
  );
}
