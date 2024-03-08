import { useState, useEffect } from "react";

export default function UseCallbackChildComponent({ handleClick }) {
  const [text, setText] = useState(0);
  console.log(text, "text는 0");

  useEffect(() => {
    console.log("자식 컴포넌트 렌더링");
    setText(() => {
      handleClick;
    });
    console.log("setText 종료");
  }, [handleClick]);

  console.log(text, "text는 undefined");
  // console.log(setText);

  return (
    <div>
      {/* text 값이 "0"이었다가 setText 안에 handleClick 만나서 undefined가 되어서 값이 나오지 않는다. 이 경험에서 리액트 동작 순서를 알아야 한다. */}
      <p>{text}</p>
      <button
        onClick={() => {
          console.log("a");
          return handleClick(10);
        }}
      >
        자식 컴포넌트 버튼
      </button>
    </div>
  );
}
