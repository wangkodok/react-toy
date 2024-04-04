import { useState } from "react";

export default function InputHandle() {
  const [text, setText] = useState("초깃값");
  const [isEditing, setIsEditing] = useState(false);

  // 변경한 텍스트 저장
  function handleTextChange(newName) {
    setText(() => {
      return newName;
    });
  }

  // 버튼 클릭하면 변경 가능
  function handleEditClick() {
    setIsEditing((editing) => {
      return !editing;
    });

    if (isEditing) {
      handleTextChange(text);
    }
  }

  // input 값 받아오기
  function handleChange(event) {
    setText(() => {
      return event.target.value;
    });
  }

  let editableText = <span>{text}</span>;
  // let btnCaption = "Edit";

  if (isEditing === true) {
    editableText = (
      <input type="text" required value={text} onChange={handleChange} />
    );
    // btnCaption = "Save";
  }

  return (
    <section>
      <h1># input 값을 받아와서 변경하고 저장</h1>
      <ul>
        <li>
          <span>{editableText}</span>
          <button onClick={handleEditClick}>
            {isEditing ? "Save" : "Edit"}
          </button>
        </li>
      </ul>
    </section>
  );
}
