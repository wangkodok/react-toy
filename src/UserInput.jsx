import { useState, forwardRef, useRef } from "react";

export default function UserInput() {
  const [valueState, setValueState] = useState({
    dataResult: [],
  });

  const name = useRef();
  const date = useRef();
  const desc = useRef();

  function handleSave() {
    // const enteredName = name.current.value;
    // const enteredDate = date.current.value;
    // const enteredDesc = desc.current.value;

    setValueState((dataResultState) => {
      const dataValue = {
        name: name.current.value,
        date: date.current.value,
        desc: desc.current.value,
      };

      const newDataResult = {
        ...dataValue,
        id: Math.random(),
      };

      return {
        ...dataResultState,
        dataResult: [...dataResultState.dataResult, newDataResult],
      };
    });

    // 저장하고 이전의 값 초기화
    name.current.value = "";
    date.current.value = "";
    desc.current.value = "";
  }

  console.log(valueState);

  return (
    <section>
      <h1># 사용자 입력 처리 연습</h1>
      <div>
        <Input type="text" id="name" inputText="이름" ref={name} />
        <Input type="date" id="date" inputText="생년월일" ref={date} />
        <Input type="text" id="desc" inputText="축하메시지" ref={desc} />
        <button onClick={handleSave}>저장</button>
      </div>
    </section>
  );
}

// 재사용 가능한 컴포넌트
export const Input = forwardRef(function Input({ inputText, ...props }, ref) {
  let input;
  if (props.type === "text") {
    input = <input ref={ref} {...props} />;
  }
  if (props.type === "date") {
    input = <input ref={ref} {...props} />;
  }

  return (
    <label htmlFor={props.id}>
      {inputText}
      {input}
    </label>
  );
});
