import { useState } from "react";

export default function StateParent() {
  const [result, setResult] = useState([]);

  // 폼에서 입력받은 값 배열에 추가
  function addTodoItem(value) {
    if (value.trim() !== "") {
      setResult((valueResult) => {
        return [...valueResult, value];
      });
    }
  }

  // 폼이 제출될 때 실행되는 함수
  function onTodoFormSubmit(event) {
    event.preventDefault();
    let inputElement = event.target[0];
    const buttonElement = event.target[1];
    addTodoItem(inputElement.value);

    // 버튼 클릭하면 인풋 값 초기화
    if (buttonElement.tagName === "BUTTON") {
      inputElement.value = "";
    }
  }

  // 엔터 키 입력하면 폼 초기화 함수
  function handleEnterKeyReset(event) {
    setTimeout(() => {
      if (event.key === "Enter") {
        event.target.value = "";
      }
    }, 0);
  }

  return (
    <section>
      <h1># useState 1개만 사용하여 출력만 되는 투두리스트 만들기</h1>
      <form onSubmit={onTodoFormSubmit}>
        <label id="inputResult">입력란</label>
        <input type="text" name="inputResult" onKeyDown={handleEnterKeyReset} />
        <button>저장</button>
      </form>
      <ul>
        {result.map((_, index) => {
          return <StateChild key={index} result={result} index={index} />;
        })}
      </ul>
    </section>
  );
}

function StateChild({ ...props }) {
  return (
    <li>
      <span>{props.result[props.index]}</span>
    </li>
  );
}
